import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../lib/ironConfig";
import { Octokit } from "octokit";

const octokit = new Octokit();

export default withIronSessionApiRoute(eventsRoute, ironOptions);

async function eventsRoute(req, res) {
  const user = req.session.user;
  console.log(" <<<<<<<<<<<<<<<<<?>>>>>>>>>>>>>")
  console.log(user)
  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  try {
    const { data: events } =
      await octokit.rest.activity.listPublicEventsForUser({
        username: user,
      });

    res.json(events);
  } catch (error) {
    res.status(200).json([]);
  }
}