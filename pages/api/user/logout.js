
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironConfig";


export default withIronSessionApiRoute(logout, ironOptions);

async function logout(req, res) {
    
  req.session.destroy();
  
  return res.json({email: "", role: "", isLoggedIn: false});
}