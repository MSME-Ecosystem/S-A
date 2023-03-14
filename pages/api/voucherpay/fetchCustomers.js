import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {  
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/getcustomers",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },   
    };
    try {
      axios(config)
        .then(function (response) {
          console.log(response.data.data)
         
          res.status(200).json(response?.data.data);
        })
        .catch(function (error) {
          console.log("22222222222");
          console.log(error?.response.data);
          res.status(500).json(error?.response.data);
        });
    } catch (error) {
      console.log("33333333333333333");
      console.log(error);
    }
  }
}



// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method === "GET") {  
//     const config = {
//       method: "get",
//       maxBodyLength: Infinity,
//       url: "https://dashboard.voucherpay.online/api/getcustomers",
//       headers: {
//         token: process.env.VOUCHER_PAY_PK_LIVE,
//         "Content-Type": "application/json",
//       },   
//     };
//     try {
//       const response = await axios(config);
//       res.status(200).json(response?.data.data);
//     } catch (error) {
//       console.log("22222222222");
//       console.log(error?.response);
//       res.status(500).json(error?.response);
//     }
//   }
// }
