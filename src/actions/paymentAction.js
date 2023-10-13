import { url } from './Url'
import axios from 'axios'


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }
        script.onerror= () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    })
}


export async function buyCourse(details,navigate) {

    console.log(details)
    
    try{
        //load the script
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if(!res) {
            
            return;
        }


        const config = {
            headers: {
              'Content-Type': 'application/json',
              
            },
          }

        //initiate the order
          const orderResponse =  await axios.post(`${url}/api/payment`,details,config)
              
                                

        if(!orderResponse.data.success) {
            throw new Error(orderResponse.data.message);
        }
        console.log("PRINTING orderResponse", orderResponse);
        
        const options = {
            key: "rzp_test_9zku3Zf03RVG6T",
            currency: orderResponse.data.data.currency,
            amount: `${orderResponse.data.data.amount}`,
            order_id:orderResponse.data.data.id,
            name:"YourShop",
            description: "Thank You for Purchasing the Product",
            prefill: {
                name: details.name,
                email:details.email
            },
            handler: function(response) {
                //send successful wala mail
                // sendPaymentSuccessEmail(response, orderResponse.data.data.amount,token );
                // //verifyPayment
                verifyPayment({...response,orderId: details._id},navigate);
            }
        }
        // miss hogya tha 
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function(response) {
           
            console.log(response.error);
        })

}
    catch(error) {
        console.log("PAYMENT API ERROR.....", error);
        
    }
    
}



async function verifyPayment(bodyData,navigate) {
  
    try{



        const config = {
            headers: {
              'Content-Type': 'application/json',
              
            },
          }
        const response  = await axios.post(`${url}/api/payment/verifyPayment`,bodyData,config)

        if(!response.data.success) {
            throw new Error(response.data.message);
        }

        navigate(`/order/${bodyData.orderId}`);
        
    }   
    catch(error) {
        console.log("PAYMENT VERIFY ERROR....", error);
        
    }
   
    
}