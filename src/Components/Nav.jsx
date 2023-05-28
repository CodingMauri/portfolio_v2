import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"
import {useState,useEffect} from "react"

export default function Nav() {
  

  const [opacity ,setOpacity] = useState(null)

  const scroll = () => {

    const scrollTop  = window.pageYOffset;
    if(scrollTop >10){
      setOpacity(1)
    }
    else{
      setOpacity(0)
    }
    window.addEventListener("scroll",scroll)
    return () => {
      window.addEventListener("scroll",scroll)
    }
  }
  useEffect(() => {
    scroll()
  })
  return (
    <div>
      
    </div>
  );
}
