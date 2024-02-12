/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Notifications from "views/Notifications.js";
import Searchstation from "views/examples/Searchstation.js";
import Searchservices from "views/examples/Searchservices.js";
import Booking from "views/Booking.js";
import BookingForm from "views/BookingForm.js";



var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/vehicleowner",
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Booking />,
    layout: "/vehicleowner"
  },

  {
    path: "/BookingForm",
    name: "BookingForm",
    icon: "ni ni-bullet-list-67 text-red",
    component: <BookingForm />,
    layout: "/vehicleowner"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Notifications />,
    layout: "/vehicleowner"
  },
  {
    path: "/searchstation",
    name: "Search Station",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Searchstation />,
    layout: "/vehicleowner"
  },
  {
    path: "/searchservices",
    name: "Search Service",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Searchservices />,
    layout: "/vehicleowner"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/shopowner"
  },
  {
    path: "/admin/login",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/shopowner"
  }
];
export default routes;
