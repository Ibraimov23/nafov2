import * as React from "react"

const Card = (props) => {
    return (
        <div class="faq-page__description" data-aos="fade-up">
            <p class="faq-page__description_text faq-page__description_text1">{props.question}</p>
            <p class="faq-page__description_text faq-page__description_text2">{props.answer}</p>
        </div>
    )
}
export default Card