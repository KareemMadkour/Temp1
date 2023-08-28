import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap
import MyNavbar from './Components/Navbar/Navbar';
import MyHome from './Components/Home/Home';
import MyLogo from './Components/Logo/Logo';
import MyAbout from './Components/About/About';
import MyMiniFAQ from './Components/MiniFAQ/MiniFAQ';
import MyServices from './Components/Services/Services';
import MyCallToAction from './Components/CallToAction/CallToAction';
import MyTeam from './Components/Team/Team';
import MyPricing from './Components/Pricing/Pricing';
import MyContact from './Components/Contact/Contact';

export default function App() {
  return (
    <>
        <MyNavbar />
        <MyHome />
        <MyLogo />
        <MyAbout />
        <MyMiniFAQ />
        <MyServices />
        <MyCallToAction />
        <MyTeam />
        <MyPricing />
        <MyContact />
    </>
  )
}