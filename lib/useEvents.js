import useSWR from "swr";

import useUser from "./useUser";

export default function useEvents() {
  // We do a request to /api/events only if the user is logged in
  const { user } = useUser({
    redirectTo: "/applogin",
    });
//   console.log(" <<<<<<<<<<<<<<<<<??>>>>>>>>>>>>>")
// console.log(user)

  const { data: events } = useSWR(user?.isLoggedIn ? `/api/events` : null);

  return { events };
}