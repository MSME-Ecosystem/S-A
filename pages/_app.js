
 

//  Home Layout CSS
import "../styles/css/bootstrap.min.css";
import "../styles/css/fontawesome/css/all.min.css";
import "../styles/css/magnific-popup.css";
import "../styles/css/themify-icons.css";
import "../styles/css/animate.min.css";
import "../styles/css/owl.carousel.min.css";
import "../styles/css/owl.theme.default.min.css";
import "../styles/css/style.css";
import "../styles/css/responsive.css";

//  Dashboard Layout CSS
 import "../styles/dashboard/style.css";
import "public/dashboard/vendor/datatables/css/jquery.dataTables.min.css"
  
export default function MyApp({ Component, pageProps }) {
   
 
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
