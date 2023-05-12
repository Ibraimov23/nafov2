import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Buy = ({ siteTitle }) => {

	return (
		<div class="buy-page" id ="buy">
			<div class="buy-page__container _container">
				<h1 class="buy-page__header header-text">HOW TO BUY</h1>
				<div class="buy-page__cards">
					<div class="buy-page__card">
						<div class="card__row">
							<div class="row__img"><StaticImage src="../../../images/buy/wallet.svg" alt="wallet" placeholder="blurred" />
							</div>
							<div class="row__description">
								<p class="row__description_header">
									Create a Wallet 
								</p>
								<p class="row__description_desc">You can obtain Metamask or any other wallet you prefer for free from either the app store or Google Play Store. If you are using a desktop, simply visit Metamask.io and download the Google Chrome extension.</p>
							</div>
						</div>
					</div>
					<div class="buy-page__card">
						<div class="card__row">
							<div class="row__img"><StaticImage src="../../../images/buy/eth.svg" alt="eth" placeholder="blurred" />
							</div>
							<div class="row__description">
								<p class="row__description_header">
									Get Some ETH 
								</p>
								<p class="row__description_desc">Have ETH in your wallet to switch to $NAFO. If you don’t have any ETH, you can buy directly on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
							</div>
						</div>
					</div>
					<div class="buy-page__card">
						<div class="card__row">
							<div class="row__img"><StaticImage src="../../../images/buy/uniswap.svg" alt="uniswap" placeholder="blurred" />
							</div>
							<div class="row__description">
								<p class="row__description_header">
										Go to Uniswap
								</p>
								<p class="row__description_desc">
								To connect to Uniswap, visit app.uniswap.org using either the browser in your Metamask app or Google Chrome. Connect your wallet and navigate to Uniswap. Afterward, input the $NAFO token address, select NAFO, and confirm. When prompted by Metamask for a wallet signature, provide your signature to complete the process.</p>
							</div>
						</div>
					</div>
					<div class="buy-page__card">
						<div class="card__row">
							<div class="row__img"><StaticImage src="../../../images/buy/swap.svg" alt="buy" placeholder="blurred" />
							</div>
							<div class="row__description">
								<p class="row__description_header">
									Swap ETH for NAFO 
								</p>
								<p class="row__description_desc">*When selling $NAFO, please be aware that there is a 4% tax, which goes to our donation fund. Therefore, it's recommended that you consider this tax when making purchases. However, during periods of market instability, it may be necessary to use slippage.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="buy-page__screen">
					<iframe src="https://app.uniswap.org/#/swap?outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933" height="428px" width="100%">
					</iframe>
				</div>
			</div>
		</div>
	)
}
