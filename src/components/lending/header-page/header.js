import * as React from "react"
import logo from "../../../images/header/logo.svg";

const Header = ({ siteTitle }) => {

	return (
		<header class="header">
			<div class="header__container _container">
				<a class="header__logo" href="#"><img src={logo} alt="logo" className="logo__image"/></a>
				<nav class="header__menu">
					<ul class="menu__items">
						<li class="menu__item"><a href="#home" class="menu__link">HOME</a></li>
						<li class="menu__item"><a href="#about" class="menu__link">OUR VALUES</a></li>
						<li class="menu__item"><a href="#buy" class="menu__link">HOW TO BUY</a></li>
						<li class="menu__item"><a href="#tokenomic" class="menu__link">TOKENOMICS</a></li>
						<li class="menu__item"><a href="#faq" class="menu__link">FAQ</a></li>
					</ul>
				</nav>
				<a class="header__button" href="https://app.uniswap.org/#/swap?outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933"><p class="button__text">buy now</p></a>
			</div>
		</header>
	)
}

export default Header
