import React from 'react';
import axios from 'axios';
import Navbars from "../../navbar/Navbar";
import Faqlist from './faqList';
import { Button, Accordion } from 'react-bootstrap';

class FAQ extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "수강정정",
            faqInfo: []
        };
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo(){
        const info = 'dummy/faqInfo.json';

        axios.get(info)
            .then(data => {
                this.setState({
                    faqInfo: data.data.faqInfo
                });
            })
            .catch(error => {console.log(error);});
    }

    HandleClick = (e) => {
        this.setState({id: e.target.id});
        console.log(e.target.id)
    }

    render() {
        return(
            <div>
                <Navbars></Navbars>

                <h1>
                    수강신청 FAQ
                </h1>
                
                <Button id="수강정정" onClick = {this.HandleClick}>수강정정</Button>
                <Button id="수강순위" onClick = {this.HandleClick}>수강순위</Button>
                <Button id="이수학점" onClick = {this.HandleClick}>이수학점</Button>
                <Button id="기타과목" onClick = {this.HandleClick}>기타과목</Button>

                <Faqlist list = {
                    this.state.faqInfo.filter(faq => (
                        faq.id === this.state.id
                    ))
                } />
            </div>
        )
    }
}

export default FAQ
