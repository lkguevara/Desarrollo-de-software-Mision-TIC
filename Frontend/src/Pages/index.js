import React, {useState} from 'react';
import Sidebar from '../components/Home/Navbar/Sidebar';
import Navbar from '../components/Home/Navbar';
import Slider from "../components/Home/Main/products/index";
import InfoSection from './../components/Home/Main/InfoSection';
import Steps from './../components/Home/Main/Steps';
import { homeObjOne} from "./../components/Home/Main/InfoSection/Data";
import Footer from './../components/Home/Footer';



function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Slider />
      <InfoSection {...homeObjOne} />
      <Steps />
      <Footer />
        </>
    )
}

export default Home;
