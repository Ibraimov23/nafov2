import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Typist from 'react-typist';
import { useInView } from "react-intersection-observer";

const Card = (props) => {
    const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({ threshold: 0 });
    const [isTypingComplete, setIsTypingComplete] = useState(false);

	const handleTypingDone = () => {
		setIsTypingComplete(true);
	};
	const startTyping = () => {
		setIsVisible(true);
	};
    useEffect(() => {
		if (isTypingComplete) {}
	}, [isTypingComplete]);

    return (
        <div class="faq-page__description" ref={ref}>
            <p class="faq-page__description_text faq-page__description_text1"><Fade duration={2000}>{props.question}</Fade></p>
            <p class="faq-page__description_text faq-page__description_text2">{inView && !isTypingComplete ? (
                <Typist avgTypingDelay={15} onTypingDone={handleTypingDone}
                    startDelay={100} cursor={{ show: false }}>{props.answer}</Typist>):(<>{props.answer}</>)}</p>
        </div>
    )
}
export default Card