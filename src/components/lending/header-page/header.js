import * as React from "react"
import mylogo from "../../../images/header/logo.svg";

const Header = ({ siteTitle }) => {

	return (
		<header class="header">
			<div class="header__container _container">
				<a class="header__logo" href="#"><img src={mylogo} alt="logo" className="logo__image"/></a>
				<nav class="header__menu">
					<ul class="menu__items">
						<li class="menu__item"><a href="#home" class="menu__link">HOME</a></li>
						<li class="menu__item"><a href="#about" class="menu__link">OUR VALUES</a></li>
						<li class="menu__item"><a href="#buy" class="menu__link">HOW TO BUY</a></li>
						<li class="menu__item"><a href="#tokenomic" class="menu__link">TOKENOMICS</a></li>
						<li class="menu__item"><a href="#faq" class="menu__link">FAQ</a></li>
					</ul>
				</nav>
				<a class="header__button" href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f"><p class="button__text">buy now</p></a>
			</div>
		</header>
	)
}

export default Header
