import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironConfig";


export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
  const { email,role,rc } = await req.body
  try {
    const sessionUser = { email: email, role: role,  rcode: rc, isLoggedIn: true }
    req.session.user = sessionUser;
    await req.session.save();
    return res.json(sessionUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

}