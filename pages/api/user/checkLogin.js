
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironConfig";


export default withIronSessionApiRoute(checkLogin, ironOptions)
async function checkLogin(req, res) {
    const user = req.session.user;    
    // get user from database then:
    if (!user || user.isLoggedIn === false) {
        return res.json({ username: '', isLoggedIn: false })
    }else {
        return res.json({username: user.username, isLoggedIn: true})
    }
  }


   
   