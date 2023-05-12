import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const About = ({ siteTitle }) => {

    return (
        <div class="about-page" id="about">
			<div class="about-page__container _container">
				<div class="about-page__row">
					<div class="row__image">
						<StaticImage src="../../../images/about/fella.svg" alt="fella" height={500} width={402} layout="fixed" placeholder="blurred" className="row__image_img"  />
					</div>
					<div class="row__descriptions">
						<h1 class="about-page__header header-text">OUR VALUES</h1>
						<div class="about-page__description">
							<p class="description_text">The $NAFO token has been created to raise money for Ukrainian Armed Forces and civilians affected by the russian aggression. We are a team of Ukrainian patriots who want to free their homeland and make Ukraine peaceful and prosperous again.</p>
							<p class="description_text">Our goal is to maximize trading volumes of the $NAFO token, sending 4% from every transaction to the needs of Ukrainian people. The tax transfer is integrated into our smart contract and can be easily tracked on the blockchain explorer. The project team, nor anyone else, does not take any additional fees from trading $NAFO.</p>
							<p class="description_text">The fees will be sent to The Serhiy Prytula Charity Foundation, which is one of the most trusted and efficient funds raising money for Ukraine. The foundation helps both military and civilians, providing full reports for all spendings. Their team does not take any share from the donations, covering their own expenses through the partnerships.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}