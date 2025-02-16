import Aboutpage from "../pages/aboutpage/Aboutpage";
import Faqpage from "../pages/faqpage/Faqpage";
import Servicepage from "../pages/servicepage/Servicepage";
import Contactpage from "../pages/contactpage/Contactpage";
import Home from "../pages/Home";
import Supportpage from "../pages/supportpage/Supportpage";
import Searchpage from "../pages/searchpage/Searchpage";

export const RouteConstant = [
  {
    id: 1,
    path: "/",
    
    element: Home,
  },
  {
    id: 2,
    path: "/about-us",
    element: Aboutpage,
  },
  {
    id: 3,
    path: "/services",
    element: Servicepage,
  },
  {
    id: 4,
    path: "/faq",
    element: Faqpage,
  },
  {
    id: 5,
    path: "/contact-us",
    element: Contactpage,
  },
  {
    id: 6,
    path: "/support",
    element: Supportpage,
  },
  {
    id: 7,
    path: "/search",
    element: Searchpage,
  },
];
