import * as React from "react"

export const Tokenomic = ({ siteTitle }) => {

	return (
		<div class="tokenomic-page" id="tokenomic">
			<div class="tokenomic-page__limit"></div>
			<div class="tokenomic-page__container _container" data-aos-duration="1000">
				<h1 class="tokenomic-page__header header-text" data-aos="fade-up">TOKENOMICS</h1>
				<div class="tokenomic-page__descriptions">
					<h5 class="tokenomic-page__descriptions_head" data-aos="fade-up">Token supply - 199 124 800 000 000</h5>
					<div class="descriptions__texts" data-aos="fade-up">
						<p class="descriptions__texts_text">The whole supply is generated at the token launch and is locked into the Uniswap v2 liquidity via Uncx for 2 years.</p>
						<p class="descriptions__texts_text">The tax profits are accumulated on the $NAFO treasury and periodically sent to the official charity addresses. The $NAFO team will provide transaction proofs for every donation.</p>
						<p class="descriptions__texts_text">The $NAFO token also has an anti-whale protection, which limits all transactions (including buying or selling) to 1% of the total supply.</p>
					</div>
				</div>
			</div>
		</div>
	)
}