import React from 'react';
import axios from 'axios';
import "./FAQ.css"
import Navbars from "../../navbar/Navbar";
import Faqlist from './faqList';
import { Button } from 'react-bootstrap';

class FAQ extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            id: "수강정정",
            faqInfo: [],
            query: ""
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
    }

    HandleChange = (e) => {
        this.setState({query: e.target.value});
    }

    render() {

        return(
            <div>
                <Navbars></Navbars>

                <h1>
                    수강신청 FAQ
                </h1>

                <input id = "search" 
		        placeholder="검색어를 입력하세요" 
		        onChange={this.HandleChange}/>

                <div className = "btn">
                    <Button id="수강정정" onClick = {this.HandleClick}>수강정정</Button>
                    <Button id="수강순위" onClick = {this.HandleClick}>수강순위</Button>
                    <Button id="이수학점" onClick = {this.HandleClick}>이수학점</Button>
                    <Button id="기타과목" onClick = {this.HandleClick}>기타과목</Button>
                </div>

                <Faqlist list = {
                    this.state.faqInfo.filter(faq => (
                        // 버튼 클릭 or 검색 내용이 질문 또는 대답에 포함되는 경우
                        faq.id === this.state.id 
                        && (faq.question.toLowerCase().includes(this.state.query.toLowerCase())
                        || faq.answer.toLowerCase().includes(this.state.query.toLowerCase()))
                    )) 
                } />
            </div>
        )
    }
}

export default FAQ
