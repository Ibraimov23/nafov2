import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Card from "./buy-card";

export const Buy = ({ siteTitle }) => {
	return (
		<div class="buy-page" id ="buy">
			<div class="buy-page__container _container" data-aos-duration="1000">
				<h1 class="buy-page__header header-text" data-aos="fade-up">HOW TO BUY</h1>
				<div class="buy-page__cards">
					<Card header="Create a Wallet" desc="You can obtain Metamask or any other wallet you prefer for free from either the app store or Google Play Store.
					    If you are using a desktop, simply visit Metamask.io and download the Google Chrome extension." alt="wallet" />
					<Card header="Get Some ETH" desc="Have ETH in your wallet to switch to $NAFO. If you don’t have any ETH, you can buy directly on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet." alt="eth" />
					<Card header="Go to Uniswap" desc="To connect to Uniswap, visit app.uniswap.org using either the browser in your Metamask app or Google Chrome. Connect your wallet and navigate to Uniswap. Afterward, input the $NAFO token address, select NAFO, and confirm. When prompted by Metamask for a wallet signature, provide your signature to complete the process." alt="uniswap" />
                    <Card header="Swap ETH for NAFO" desc="*When selling $NAFO, please be aware that there is a 4% tax, which goes to our donation fund. Therefore, it's recommended that you consider this tax when making purchases. However, during periods of market instability, it may be necessary to use slippage." alt="swap" />
				</div>
				<div class="buy-page__screen">
					<iframe src="https://app.uniswap.org/#/swap?outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933" height="428px" width="100%">
					</iframe>
				</div>
			</div>
		</div>
	)
}
