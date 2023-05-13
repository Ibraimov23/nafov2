import * as React from "react"
import Card from "./buy-card";
import { Video } from "../../utils";

export const Buy = ({ siteTitle }) => {
	return (
		<div class="buy-page" id="buy">
			<div class="buy-page__container _container" data-aos-duration="1000">
				<h1 class="buy-page__header header-text" data-aos="fade-up">HOW TO BUY</h1>
				<div class="buy-page__cards">
					<Card header="Create a Wallet" desc="If you are using a desktop, we suggest visiting Metamask.io and downloading their browser extension. For mobile, install any Ethereum wallet that can be connected to Uniswap." alt="wallet" />
					<Card header="Get Some ETH" desc="You will need ETH to pay for transaction fees when buying $NAFO. You can buy some ETH directly in Metamask or just get it transferred to your wallet from an exchange or your fellas." alt="eth" />
					<Card header="Go to Uniswap" desc="Open the Uniswap app, connect your wallet, and paste the $NAFO smart contract address. Or simply visit this link for a pre-configured setup with $NAFO as received currency." alt="uniswap" />
					<Card header="Become a fella" desc="Time to join $NAFO! Set the slippage to at least 4-5%, enter how much $NAFO you want to buy, and press Swap. Pay the gas fee and wait for your transaction to be confirmed. Congratulations, you’re a fella now!" alt="swap" />
				</div>
				<div class="buy-page__screen" data-aos="fade-up">
					<Video videoSrcURL="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" videoTitle="uniswap" width="100%" height="428" />
				</div>
			</div>
		</div>
	)
}
