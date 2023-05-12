import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Tokenomic = ({ siteTitle }) => {

	return (
		<div class="tokenomic-page" id="tokenomic">
			<div class="tokenomic-page__container _container">
				<h1 class="tokenomic-page__header header-text">TOKENOMICS</h1>
				<div class="tokenomic-page__row">
					<div class="row__image">
						<StaticImage src="../../../images/tokenomic/nafob.svg" alt="nafob" placeholder="blurred"  />
					</div>
					<div class="row__description">
						<h5 class="row__description_head">Token supply - 199 124 800 000 000</h5>
						<div class="row__descriptions">
							<p class="row__descriptions_text">The whole supply is generated at the token launch and is locked into the Uniswap v2 liquidity via Uncx. The initial liquidity of 2 ETH is provided from the personal funds of the $NAFO team.</p>
							<p class="row__descriptions_text">The tax profits are accumulated on the $NAFO fund smart contract and periodically sent to the official address of The Serhiy Prytula Foundation. The $NAFO team will announce every donation together with transactions that can be easily verified on a blockchain explorer.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}