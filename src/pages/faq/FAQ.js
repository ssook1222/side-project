import React from 'react';
import axios from 'axios';
import "./FAQ.css"
import Navbars from "../../navbar/Navbar";
import Footers from  "../../footer/FooterMain";
import Faqlist from './faqList';
import { Button, Image } from 'react-bootstrap';

class FAQ extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            id: "수강정정",
            faqInfo: [],
            query: "", // #searchBar의 value값
            setQuery: "", // #searchBtn 누르면 현재 query값 넣음
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
        // 버튼을 클릭하면 검색한 내용 초기화
        this.setState({query: ""})
        this.setState({setQuery: ""})
    }
    
    HandleClick_ = () => {
        this.setState({setQuery: this.state.query});
        // 검색버튼 누르면 검색창에서 검색 내용 초기화
        this.setState({query: ""});
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

                <div className='search'>

                    <input id = "searchBar"
                           placeholder="검색어를 입력하세요"
                           value = {this.state.query}
                           onChange={this.HandleChange}/>ce
                    <Image id = "searchBtn" src="/images/searchBtn.png" onClick={this.HandleClick_} />

                </div>

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
                        && (faq.question.toLowerCase().includes(this.state.setQuery.toLowerCase())
                        || faq.answer.toLowerCase().includes(this.state.setQuery.toLowerCase()))
                    )) 
                } />

            </div>
        )
    }
}

export default FAQ
