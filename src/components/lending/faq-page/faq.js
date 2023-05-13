import * as React from "react"
import Card from "./faq-card"

export const Faq = ({ siteTitle }) => {

    return (
        <div class="faq-page" id="faq">
			<div class="faq-page__container _container">
				<h1 class="faq-page__header header-text" data-aos="fade-up">FAQ</h1>
				<div class="faq-page__descriptions">
					<Card question="Why trade $NAFO instead of donating to Ukraine?"
					    answer="We completely support everyone who wants to donate to Ukraine directly instead of speculating on the $NAFO price. However, the aim of $NAFO is to add an additional stream of income for the Ukrainian relief, which otherwise would be spent on trading memecoins with zero purpose."
					/>
					<Card question="Who is the team behind the $NAFO project?"
					    answer="We are a group of Ukrainian nationals and their fellas with rich experience in cryptocurrencies. After raising money for different Ukrainian foundations, we decided to scale up donations and created $NAFO. We are financially secure and have no interest in gaining personal income from the $NAFO token."
					/>
					<Card question="Is there a roadmap for $NAFO?"
					    answer="$NAFO is not a startup and therefore does not require a formal roadmap. The $NAFO token is a fully functional product that needs no further development after launch. Nevertheless, the project team will put a lot of effort in promoting $NAFO to raise as much money for Ukraine as possible."
					/>
					<Card question="How do donations work?"
					    answer="For every buy transaction, 4% of the $NAFO tokens are burned and the amount is recorded in the $NAFO smart contract (function _newDonate). The $NAFO contract owner later generates the same (or smaller) amount of tokens by calling the sendDonate function. The proceeds from the tokens are then realized and donated to a charity of choice."
					/>
				</div>
			</div>
		</div>
    )
}