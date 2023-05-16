import AOS from 'aos';
import "aos/dist/aos.css"

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___gatsby").style.display="block";
    }, 100)
}

export const onClientEntry = () => {
    AOS.init()
}