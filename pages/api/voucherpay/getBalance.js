import axios from "axios";

export default async function handler(req, res) {
    if (req.method === "POST") {     
   
    const data = req.body.data;
   
 
    const config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/getbalance",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      axios(config)
        .then(function (response) {  
          res.status(200).json(response?.data);
        })
        .catch(function (error) {          
          console.log(error?.response.data);
          res.status(500).json(error?.response.data);
        });
    } catch (error) { 
      console.log(error);
    }
  }
}
