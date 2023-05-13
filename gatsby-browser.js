import AOS from 'aos';
import "aos/dist/aos.css"

/*export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none";
        document.getElementById("___gatsby").style.display="block";
        document.getElementById("___bd").style.backgroundColor = "unset";
        document.getElementById("___bd").style.overflow = "unset";
    }, 1000)
}*/

export const onClientEntry = () => {
    AOS.init()
}