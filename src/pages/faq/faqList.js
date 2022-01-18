import React from 'react';
import { Button } from 'react-bootstrap';

const Faqlist = (props) => {
    return (
        <ul className='faq_list'>
            {  
                props.list.map((faq, index) => (
                    <li key = {index}>
                        <h1>{faq.question}</h1>
                        <h2>{faq.answer}</h2>
                    </li>
                ))
            }
        </ul>
    )
}

export default Faqlist;