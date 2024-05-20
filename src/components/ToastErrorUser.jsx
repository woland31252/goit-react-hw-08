import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const ToastErrorUser = () => {
    toast.error('This is an error!');
    return (
        <div>
           <Toaster/> 
        </div>
    )
        
    
}

export default ToastErrorUser