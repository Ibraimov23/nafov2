import React from "react"
import AOS from 'aos';
import "aos/dist/aos.css"
export const onClientEntry = () => {
    AOS.init()
  }