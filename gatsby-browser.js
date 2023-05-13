import React from "react"
import AOS from 'aos';
import "aos/dist/aos.css"

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 1000)
}
export const onClientEntry = () => {
    AOS.init()
}