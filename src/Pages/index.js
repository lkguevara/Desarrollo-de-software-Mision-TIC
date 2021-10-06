import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Slider from "../components/products/index";
import InfoSection from '../components/InfoSection';
import Steps from '../components/Steps';
import { homeObjOne} from "../components/InfoSection/Data";
import Footer from '../components/Footer';



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
