import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Card = (props) => {
    const wallet = {src: "../../../images/buy/wallet.svg", alt: "wallet"};
    const eth = {src: "../../../images/buy/eth.svg", alt: "eth"};
    const uniswap = {src: "../../../images/buy/uniswap.svg", alt: "uniswap"};
    const swap = {src: "../../../images/buy/swap.svg", alt: "swap"};
    return (
        <div class="buy-page__card" data-aos="fade-up">
            <div class="card__row">
                <div class="row__img">
                    {props.alt == wallet.alt ? <StaticImage {...wallet} placeholder="blurred"  /> 
                    : props.alt == eth.alt ? <StaticImage {...eth} placeholder="blurred" />
                    : props.alt == uniswap.alt ? <StaticImage {...uniswap} placeholder="blurred" />
                    : <StaticImage {...swap} placeholder="blurred" />
                    }
                </div>
                <div class="row__description">
                    <p class="row__description_header">
                        {props.header}
                    </p>
                    <p class="row__description_desc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Card
