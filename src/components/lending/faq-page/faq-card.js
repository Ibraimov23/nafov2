import React, { useState } from "react";
import { Fade } from "react-reveal";
import Typist from 'react-typist';
import { useInView } from "react-intersection-observer";

const Card = (props) => {
    const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({ threshold: 0 });
	const handleTypingDone = () => {
		console.log("");
	};
	const startTyping = () => {
		setIsVisible(true);
	};
    return (
        <div class="faq-page__description" ref={ref}>
            <p class="faq-page__description_text faq-page__description_text1"><Fade duration={2000}>{props.question}</Fade></p>
            <p class="faq-page__description_text faq-page__description_text2">{inView && (
                <Typist avgTypingDelay={10} onTypingDone={handleTypingDone}
                    startDelay={100} cursor={{ show: false }}>{props.answer}</Typist>)}</p>
        </div>
    )
}
export default Card