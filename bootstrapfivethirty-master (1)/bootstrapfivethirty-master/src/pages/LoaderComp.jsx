
import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
    return (
        <div style={{width:"100px", margin:"auto"}}>
        <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    );
};  
export default LoaderComp;