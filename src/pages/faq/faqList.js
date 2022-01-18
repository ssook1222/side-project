import "./faqList.css"
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faqlist = (props) => {
    return (
        <div id='faq_list'>
            {  
                props.list.map((faq, index) => (
                    <Accordion defaultActiveKey={index} flush>
                        <Accordion.Item eventKey = {faq.id}>
                            <ColoredLine color = "#162B7D"/>
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body>{faq.answer}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>  
                ))
            }
            <ColoredLine color = "#162B7D"/>
        </div>
    )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);

export default Faqlist;