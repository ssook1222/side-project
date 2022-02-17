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
            id: "btn1",
            faqInfo: [],
            query: "", // #searchBar의 value값
            setQuery: "", // #searchBtn 누르면 현재 query값 넣음
            //list: []
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
        this.setState({query: ""});
        this.setState({setQuery: ""});
        // this.setState({list:
        //     this.state.faqInfo.filter((faq) => (
        //         // 버튼 클릭 or 검색 내용이 질문 또는 대답에 포함되는 경우
        //         faq.id === e.target.id
        //         && (faq.question.toLowerCase().includes(this.state.setQuery.toLowerCase())
        //             || faq.answer.toLowerCase().includes(this.state.setQuery.toLowerCase()))))
        // })
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
        var btnClassN = document.getElementsByClassName("btn_type");

        function clickedBtn(e) {
            if (e.target.classList[1] === "clicked") {
                e.target.classList.remove("clicked");
            } else {
                for (var i = 0; i < btnClassN.length; i++) {
                    btnClassN[i].classList.remove("clicked");
                }
                e.target.classList.add("clicked");
            }
        }
        
        function init() {
            for (var i = 0; i < btnClassN.length; i++) {
                btnClassN[i].addEventListener("click", clickedBtn);
            }
        }

        init();

        return(
            <div>
                <Navbars></Navbars>

                <div className="background">
                    <Image
                        className="img"
                        src="../images/FAQ_Text_Logo.png"/>
                </div>

                <div id="textFAQ">
                    수강신청 관련 자주 묻는 질문을 <br />모아둔 페이지입니다.
                </div>

                <div className='search'>
                    <input id = "searchBar"
                           placeholder="검색어를 입력하세요"
                           value = {this.state.query}
                           onChange={this.HandleChange}/>
                    <Image id = "searchBtn" src="/images/searchBtn.png" onClick={this.HandleClick_} />
                </div>
                
                <div className = "btnFaq">

                    <Button className = "btn_type clicked" id="btn1" onClick = {this.HandleClick}>수강정정</Button>
                    <Button className = "btn_type" id="btn2" onClick = {this.HandleClick}>수강순위</Button>
                    <Button className = "btn_type" id="btn3" onClick = {this.HandleClick}>이수학점</Button>
                    <Button className = "btn_type" id="btn4" onClick = {this.HandleClick}>기타과목</Button>

                </div>

                <Faqlist clikcedBtn = {this.state.id} list = {
                    this.state.faqInfo.filter(faq => (
                        // 버튼 클릭 or 검색 내용이 질문 또는 대답에 포함되는 경우
                        faq.id === this.state.id
                        && (faq.question.toLowerCase().includes(this.state.setQuery.toLowerCase())
                        || faq.answer.toLowerCase().includes(this.state.setQuery.toLowerCase()))
                    ))
                }/>

                {/*<Faqlist clikcedBtn = {this.state.id}*/}
                {/*         list = {this.state.list}>*/}
                {/*    {console.log(this.state.list)}</Faqlist>*/}

                <Footers />
            </div>
        )
    }
}

export default FAQ