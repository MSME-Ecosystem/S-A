
const data = "http://164.92.122.48/v1/api.php?_id=ICLAU2VHRHU8H0NFSGFAJGA6OWFNRX1NLME8DSEWUNGZHYHNJUIBTC15OMJ97Nj"
export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return response.status(200).json(data);
  }
  if (method === "POST") {
    const { body } = request;
    data.push({ ...body, id: data.length + 1 });
    return response.status(200).json(data);
  }
}