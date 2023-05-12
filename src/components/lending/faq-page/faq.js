import * as React from "react"
import { Link } from "gatsby"

export const Faq = ({ siteTitle }) => {

    return (
        <div class="faq-page" id="faq">
			<div class="faq-page__container _container">
				<h1 class="faq-page__header header-text">FAQ</h1>
				<div class="faq-page__descriptions">
					<div class="faq-page__description">
						<p class="faq-page__description_text faq-page__description_text1">Why trade $NAFO instead of donating to Ukraine?</p>
						<p class="faq-page__description_text faq-page__description_text2">We completely support everyone who wants to donate to Ukraine directly instead of speculating on the $NAFO price. However, the aim of $NAFO is to add an additional stream of income for the Ukrainian relief, which otherwise would be spent on trading memecoins with zero purpose.</p>
					</div>
					<div class="faq-page__description">
						<p class="faq-page__description_text faq-page__description_text1">
						Who is the team behind the $NAFO project?</p>
						<p class="faq-page__description_text faq-page__description_text2">We are a group of Ukrainian nationals and their fellas with rich experience in cryptocurrencies. After raising money for different Ukrainian foundations, we decided to scale up donations and created $NAFO. We are financially secure and have no interest in gaining personal income from the $NAFO token.</p>
					</div>
					<div class="faq-page__description">
						<p class="faq-page__description_text faq-page__description_text1">Is there a roadmap for $NAFO?</p>
						<p class="faq-page__description_text faq-page__description_text2">$NAFO is not a startup and therefore does not require a formal roadmap. The $NAFO token is a fully functional product that needs no further development after launch. Nevertheless, the project team will put a lot of effort in promoting $NAFO to raise as much money for Ukraine as possible.</p>
					</div>
				</div>
			</div>
		</div>
    )
}