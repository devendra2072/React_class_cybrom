import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';
const Home=()=>{
const [prodata, setProData]= useState([]);
const [reviewdata, setReviewData]= useState([]);
const dispatch= useDispatch();
const navigate= useNavigate();
const loadData=async()=>{
    let api="http://localhost:3000/product";
    const response= await axios.get(api);
    console.log(response.data);
    setProData(response.data);
    let api1="http://localhost:3000/userreviews";
    const response1= await axios.get(api1);
    console.log(response1.data);
    setReviewData(response1.data);
}

useEffect(()=>{
    loadData();
}, [])

var reviewPoint=0;
var sno=0;
var myPoint=0
const ans= prodata.map((key)=>{

    return(
        <>
          <Card style={{ width: '16rem', marginTop:"20px" }}>
      <Card.Img variant="top" src={key.image} style={{height:"300px"}}
      onClick={()=>{navigate(`/prodetail/${key.id}`)}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
           {key.description}
           <h4> Price : {key.price}</h4>
           Ratings : 
          {  
             reviewdata.map((key1)=>{
              if (key.id==key1.productid)
              {
                reviewPoint=reviewPoint+key1.point
                sno++;
              }
             })       

          }
          Point : {parseInt(reviewPoint/sno)}


      
                         
     

        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, desc:key.description,category:key.category, price:key.price, image:key.image, qnty:1}))}}>
          add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
    )
})

    return(
        <>
             <Carousel>
      <Carousel.Item> 
        <img src={b1}  width="100%" height="200" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} width="100%" height="200" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3}  width="100%" height="200" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h2 align="center"> Our Products</h2>

<div id="cardData">
{ans}
</div>
   
        </>
    )
}

export default Home;