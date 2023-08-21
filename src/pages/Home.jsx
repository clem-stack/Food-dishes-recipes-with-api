import Veggie from "../components/Veggie";
import Cookies from "../components/Cookies";
import Popular from "../components/Popular";
import Seafood from "../components/Seafood"
import {motion} from "framer-motion"
import Footer from "../components/Footer";

import React from 'react'

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial ={{opacity: 0}}
    exit={{opacity: 0}}
    transition ={{duration: 0.5}}
    >

        <Popular />
        <Veggie />
        <Cookies />
        <Seafood />
        <Footer />
    </motion.div>
  )
}

export default Home