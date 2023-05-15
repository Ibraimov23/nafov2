import React, { useState } from "react";
import { Slide, Fade } from "react-reveal";
import Typist from 'react-typist';
import { useInView } from "react-intersection-observer";
import Icon from '../../icons/icon';
import { Video } from "../../utils";

export const Buy = ({ siteTitle }) => {
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({ threshold: 0 });
	const handleTypingDone = () => {
		console.log("");
	};
	const startTyping = () => {
		setIsVisible(true);
	};
	return (
		<div class="buy-page" id="buy">
			<div class="buy-page__container _container" ref={ref}>
				<h1 class="buy-page__header header-text" data-aos="fade-up">HOW TO BUY</h1>
				<div class="buy-page__cards">
					<div class="buy-page__card" data-aos="fade-up">
						<div class="card__row">
							<Slide left duration={2000} class="card__row">
								<div class="row__img">
									<Icon name="wallet" fould="buy" width={149} alt="wallet" />
								</div>
							</Slide>
							<div class="row__description">
								<p class="row__description_header"><Fade duration={2000}>Create a Wallet</Fade></p>
								<p class="row__description_desc"> {inView && (
									<Typist avgTypingDelay={10} onTypingDone={handleTypingDone}
										startDelay={100} cursor={{ show: false }}>If you are using a desktop, we suggest visiting <a href="https://metamask.io/" class="_line"> Metamask.io</a> and downloading their browser extension. For mobile, install any Ethereum wallet that can be connected to Uniswap.
									</Typist>)}
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
							<Fade duration={2000}>
								<div class="row__description">
									<p class="row__description_header">Get Some ETH</p>
									<p class="row__description_desc"> {inView && (
										<Typist avgTypingDelay={10} onTypingDone={handleTypingDone}
											startDelay={100} cursor={{ show: false }}>
											You will need ETH to pay for transaction fees when buying $NAFO. You can buy some ETH directly in Metamask or just get it transferred to your wallet from an exchange or your fellas.
										</Typist>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
					<div class="buy-page__card" data-aos="fade-up">
						<div class="card__row">
							<Slide left duration={1500} class="card__row">
								<div class="row__img">
									<Icon name="uniswap" fould="buy" width={149} alt="uniswap" />
								</div>
							</Slide>
							<Fade duration={2000}>
								<div class="row__description">
									<p class="row__description_header">Go to Uniswap</p>
									<p class="row__description_desc"> {inView && (
										<Typist avgTypingDelay={10} onTypingDone={handleTypingDone}
											startDelay={100} cursor={{ show: false }}>
											Open the <a href="https://app.uniswap.org/" class="_line">Uniswap app</a>, connect your wallet, and paste the $NAFO smart contract address. Or simply visit <a href="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" class="_line">this link</a> for a pre-configured setup with $NAFO as received currency.
										</Typist>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
					<div class="buy-page__card" data-aos="fade-up">
						<div class="card__row">
							<Slide left duration={1500} class="card__row">
								<div class="row__img">
									<Icon name="fella" fould="buy" width={149} alt="fella" />
								</div>
							</Slide>
							<Fade duration={2000}>
								<div class="row__description">
									<p class="row__description_header">Become a fella</p>
									<p class="row__description_desc"> {inView && (
										<Typist avgTypingDelay={10} onTypingDone={handleTypingDone} startDelay={100} cursor={{ show: false }}>
											Time to join $NAFO! Set the <a href="https://support.uniswap.org/hc/en-us/articles/8643879653261-What-is-Price-Slippage-"
												class="_line">slippage</a> to at least 4-5%, enter how much $NAFO you want to buy, and press Swap. Pay the gas fee and wait for your transaction to be confirmed. Congratulations, you’re a fella now!
										</Typist>)}
									</p>
								</div>
							</Fade>
						</div>
					</div>
				</div>
				<div class="buy-page__screen">
					<Fade duration={2000}>
						<Video videoSrcURL="https://app.uniswap.org/#/swap?outputCurrency=0xaf59f6613920d98ef64a133b21b28495a63e808f" videoTitle="uniswap" width="100%" height="428" />
					</Fade>
				</div>
			</div>
		</div>
	)
}
