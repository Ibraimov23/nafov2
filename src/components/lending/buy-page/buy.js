import * as React from "react"
import { Slide } from "react-reveal"
import Icon from '../../icons/icon';
import { Video } from "../../utils";

export const Buy = ({ siteTitle }) => {
	return (
		<div class="buy-page" id="buy">
			<div class="buy-page__container _container" data-aos-duration="1000">
				<h1 class="buy-page__header header-text" data-aos="fade-up">HOW TO BUY</h1>
				<div class="buy-page__cards">
					<div class="buy-page__card" data-aos="fade-up">
						<div class="card__row">
							<Slide left duration={1500} class="card__row">
								<div class="row__img">
									<Icon name="wallet" fould="buy" width={149} alt="wallet" />
								</div>
							</Slide>
							<div class="row__description">
								<p class="row__description_header">Create a Wallet</p>
								<p class="row__description_desc">
									If you are using a desktop, we suggest visiting <a href="https://metamask.io/" class="_line">Metamask.io</a> and downloading their browser extension. For mobile, install any Ethereum wallet that can be connected to Uniswap.
								</p>
							</div>
						</div>
					</div>
					<div class="buy-page__card">
						<div class="card__row">
							<Slide left duration={1500} class="card__row">
								<div class="row__img">
									<Icon name="eth" fould="buy" width={149} alt="eth" />
								</div>
							</Slide>
							<div class="row__description">
								<p class="row__description_header">Get Some ETH</p>
								<p class="row__description_desc">
									You will need ETH to pay for transaction fees when buying $NAFO. You can buy some ETH directly in Metamask or just get it transferred to your wallet from an exchange or your fellas.
								</p>
							</div>
						</div>
					</div>
					<div class="buy-page__card" data-aos="fade-up">
						<div class="card__row">
							<Slide left duration={1500} class="card__row">
								<div class="row__img">
									<Icon name="uniswap" fould="buy" width={149} alt="uniswap" />
								</div>
							</Slide>
							<div class="row__description">
								<p class="row__description_header">Go to Uniswap</p>
								<p class="row__description_desc">
									Open the <a href="https://app.uniswap.org/" class="_line">Uniswap app</a>, connect your wallet, and paste the $NAFO smart contract address. Or simply visit <a href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" class="_line">this link</a> for a pre-configured setup with $NAFO as received currency.
								</p>
							</div>
						</div>
					</div>
					<div class="buy-page__card" data-aos="fade-up">
						<div class="card__row">
							<Slide left duration={1500} class="card__row">
								<div class="row__img">
									<Icon name="fella" fould="buy" width={149} alt="fella" />
								</div>
							</Slide>
							<div class="row__description">
								<p class="row__description_header">Become a fella</p>
								<p class="row__description_desc">
									Time to join $NAFO! Set the <a href="https://support.uniswap.org/hc/en-us/articles/8643879653261-What-is-Price-Slippage-"
										class="_line">slippage</a> to at least 4-5%, enter how much $NAFO you want to buy, and press Swap. Pay the gas fee and wait for your transaction to be confirmed. Congratulations, you’re a fella now!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="buy-page__screen" data-aos="fade-up">
					<Video videoSrcURL="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" videoTitle="uniswap" width="100%" height="428" />
				</div>
			</div>
		</div>
	)
}
