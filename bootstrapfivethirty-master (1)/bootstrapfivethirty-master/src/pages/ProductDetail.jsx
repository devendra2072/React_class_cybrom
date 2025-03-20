import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { message } from "antd";

const ProductDetail=()=>{
    const {id} = useParams();
    const [mydata, setMydata]= useState({});
    const [myreview, setMyreview] = useState([]);
    const dispatch= useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const[rating , setRating]=useState(0)
    const[hover, setHover]=useState(0);
     const [email, setEmail] = useState("");
     const [comment, setComment] = useState("");
    const loadData=async()=>{
     let api=`http://localhost:3000/product/${id}`;
     const res= await axios.get(api);
     console.log(res.data);
     setMydata(res.data);

     let api1=`http://localhost:3000/userreviews/?productid=${id}`;
     const res1= await axios.get(api1);
     console.log(res1.data);
     setMyreview(res1.data);
    }

    useEffect(()=>{
      loadData();
    }, [])


    const handleSubmit=()=>{
      let api="http://localhost:3000/userreviews";
      axios.post(api, {productid:id, email:email, comment:comment, point:rating}).then((res)=>{
         message.success("comment Updated!!")
        setShow(false)
        loadData();
      })
    }

    return(
        <>
          <h1> Product Detail: </h1>
          <div id="myproduct">
            <div>
            <img src={mydata.image}  width="300px" height="300px"/>
            </div>
            <div>
              <h2> Product name : {mydata.name}</h2>
              <h3 style={{color:"red"}}> Price : {mydata.price} </h3>
              <h4> Description : {mydata.description}</h4>
              <Button variant="primary" 
        onClick={()=>{dispatch(addtoCart({id:mydata.id, name:mydata.name, desc:mydata.description,category:mydata.category, price:mydata.price, image:mydata.image, qnty:1}))}}>
          add to Cart</Button>

          <Button variant="warning" onClick={handleShow} style={{marginLeft:"20px"}} > Add Reviews</Button>
           
            <hr />

            User Reviews : 
           {
             myreview.map((key)=>{

               return(
                <>
                  <p> Comment : {key.comment}
                    <br />
                    Email : {key.email}
                    <br />
                    Ratings : {
                      [...Array(key.point)].map((star)=>{
                        return(
                          <>
                           <span style={{color:"gold"}}>&#9733;</span>
                          </>
                        )
                      })
                    
                    }
                  </p>
                </>
               )
             })

           }
           
           
           
            </div>
          </div>


          

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Give Comment to Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Enter Email : <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
           <br/>
           Comment : <input type="text" name="comment" value={comment} onChange={(e)=>{setComment(e.target.value)}} />
           <br/>
            Ratings :

       <div style={{paddingLeft:"100px", paddingTop:"-50px"}}>
        {[1,2,3,4,5].map((star)=>(
            <span
            onClick={()=>{setRating(star)}}
            onMouseEnter={()=>{setHover(star)}}
            onMouseLeave={()=>{setHover(0)}}
            style={{
                fontSize:"20px",
                color: star <= (hover || rating) ? "gold" : "gray",
                cursor:"pointer"
            }}
            >&#9733;</span>
        ))}
  <p>Star Rating : {rating} {rating > 0 ? "stars" : ""}</p>
       </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleSubmit}>
           save
          </Button>
        </Modal.Footer>
      </Modal>
   

        </>
    )
}
export default ProductDetail;