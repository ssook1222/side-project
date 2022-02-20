import React, {useState} from 'react';
import {Button, Image, Tab, Table, Tabs} from 'react-bootstrap';
import { Link } from "react-scroll";
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'
import './InfoKey.css'

function ControlledTabs(props) {
    const [key, setKey] = useState('');

    return (
        <Tabs
            id="controlled-tab"
            defaultActiveKey="major"
            onSelect={(k) => setKey(k)}
            className="mb-3">

            <Tab eventKey="major" title="전공" >
                <div className="panel">
                    <div id="panel_">
                        <div id = "panelTitle"><strong>Keyword</strong></div>
                        <div id = "panelInfo">키워드를 누르면<br /> 해당 단어로 <br /> 이동합니다.</div>

                        <Link to = "major_1" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">졸업이수학점표</Button><br />
                        </Link>
                        <Link to = "major_2" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">전공필수</Button><br />
                        </Link>
                        <Link to = "major_3" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">전공선택</Button><br />
                        </Link>
                        <Link to = "major_4" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">심화전공</Button><br />
                        </Link>
                    </div>
                </div>

                <div className="textIn">
                    <h5 id="textTitle">전공</h5>
                    <h6 id="textMain">
                        졸업을 하기 위해서 들어야 되는 필수 과목들을 의미합니다. <br /><br />
                        학교 홈페이지에 있는 <strong id = "major_1">졸업이수학점표</strong>에서 자신이 얼마나 전공 수업을 들어야 하는지 확인할 수 있습니다.<br /><br />
                        특히 <strong id = "major_2">전공필수</strong>의 경우에는 다 듣지 않으면 졸업을 하지 못하니, 권장 학년에 맞춰 듣는 것을 추천합니다.<br/><br />
                        또한, <strong id = "major_3">전공선택</strong>은 매학기 6, 12월에 선택할 수 있으며 2~5학기 재학생 및 휴학생은 복수전공/부전공/연계전공
                        및 <strong id = "major_4">심화전공</strong>을 선택하여야 합니다.

                    </h6>
                </div>
            </Tab>

            <Tab eventKey="general" title="교양">
                <div className="panel">
                    <div id="panel_">
                        <div id = "panelTitle"><strong>Keyword</strong></div>
                        <div id = "panelInfo">키워드를 누르면<br /> 해당 단어로 <br /> 이동합니다.</div>

                        <Link to = "general_1" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">교양필수</Button><br />
                        </Link>
                        <Link to = "general_2" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">교양일반</Button><br />
                        </Link>
                        <Link to = "general_3" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">영교필</Button><br />
                        </Link>
                        <Link to = "general_4" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">면제</Button><br />
                        </Link>
                    </div>
                </div>

                <div className="textIn">
                    <h5 id="textTitle">교양</h5>
                    <h6 id="textMain">
                        교양 과목은 <strong id="general_1">교양필수</strong>와 <strong id="general_2">교양일반</strong>으로 나뉩니다.<br /><br />
                        <strong id="general_1">교양필수</strong>과목은 과목별로 지정된 학년과 학기에 이수를 완료하는 것이 좋으며, 해당 과목으로는
                        융합적 사고와 글쓰기, 비판적 사고와 토론, 세계시민교육과 리더십, 진로탐색과 역량개발, 논리적 사고와 소프트웨어와
                        <strong id="general_3"> 영어교양필수과목(영교필)</strong>들이 존재합니다.<br />
                        단, <strong id="general_3">영어교양필수과목(영교필)</strong>은 공인영어성적을 가지고 있거나
                        영어권 국가의 국적 학생의 경우 이수를  <strong id="general_4">면제</strong>해줍니다.<br /><br />
                        자세한 내용은
                        <a href={"https://www.sookmyung.ac.kr/sookmyungkr/1866/subview.do"}>
                            *학교홈페이지&gt;학사정보&gt;교육과정&gt;교양교육과정
                        </a>에서 확인할 수 있습니다.
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="level" title="수강순위">
                <div className="panel">
                    <div id="panel_">
                        <div id = "panelTitle"><strong>Keyword</strong></div>
                        <div id = "panelInfo">키워드를 누르면<br /> 해당 단어로 <br /> 이동합니다.</div>

                        <Link to = "level_1" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">교양</Button><br />
                        </Link>
                        <Link to = "level_2" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">복수전공</Button><br />
                        </Link>
                        <Link to = "level_3" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">부전공</Button><br />
                        </Link>
                        <Link to = "level_4" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">연계전공</Button><br />
                        </Link>
                    </div>
                </div>

                <div className="textIn">
                    <h5 id="textTitle">수강순위</h5>
                    <h6 id="textMain">

                        <Table className = "KeyTable">
                            <thead>
                            <tr style={{fontWeight: "bold", fontSize:"2.5vmin"}}>
                                <th>구분</th>
                                <th>1순위</th>
                                <th>2순위</th>
                                <th>3순위</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan="2">교양과목</td>
                                <td>학년순 <br />(4학년⇢1학년⇢3학년⇢2학년)</td>
                                <td>직전학기<br />이수학점순</td>
                                <td>직전학기<br />성적순</td>
                            </tr>
                            <tr>
                                <td colSpan="3">※ <strong id="level_1">교양</strong>필수과목의 경우 1학년생을 우선적으로 확정함.<br />
                                    단, 「논리적사고와소프트웨어」 교과목은 2학년생을 우선적으로 확정함.</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">전공과목</td>
                                <td>제1전공/학생자율설계전공자</td>
                                <td><strong id="level_2">복수</strong>·<strong id="level_3">부전공</strong>
                                    /<strong id="level_4">연계전공</strong>자</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan="3">※ 동일조건에서는 학년순(4학년⇢3학년⇢2학년⇢1학년)
                                    ⇢ 직전학기 이수학점순 ⇢ 직전학기 성적순으로 수강 확정됨.</td>
                            </tr>
                            </tbody>
                        </Table>

                        ◉ (1학년 우선) 1학년 전공과목의 경우,
                        각 전공의 1학년생을 우선적으로 확정(단, 우선 순위 예외적용 대상과목에 한함)하며,
                        직전학기 이수학점순에서 순위 확정시 신입생의 경우에는 임의로 순위가 정해집니다.<br /><br />
                        ◉ (장애학생) 1차 수강신청기간 중 수강신청 확정기준에서 최우선순위를 적용합니다.<br /><br />
                        ◉ (<strong id="level_4">연계전공</strong> 인정 <strong id="level_1">교양</strong>과목)
                        <strong id="level_4"> 연계전공</strong>에서 인정하는 <strong id="level_1">교양</strong>과목은
                        <strong id="level_4"> 연계전공</strong> 이수자(2순위)⇢직전학기 이수학점(3순위) 순으로 적용합니다.<br /><br />
                        ◉ (수강탈락) 1차 수강신청에서 탈락 시 학년별 수강정정 우선기간 정정 가능합니다. <br />
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="change" title="수강정정">
                <div className="panel">
                    <div id="panel_">
                        <div id = "panelTitle"><strong>Keyword</strong></div>
                        <div id = "panelInfo">키워드를 누르면<br /> 해당 단어로 <br /> 이동합니다.</div>

                        <Link to = "change_1" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">개강 전</Button><br />
                        </Link>
                        <Link to = "change_2" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">전체 학년</Button><br />
                        </Link>
                        <Link to = "change_3" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">개강 후</Button><br />
                        </Link>
                        <Link to = "change_4" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">선착순</Button><br />
                        </Link>
                    </div>
                </div>

                <div className="textIn">
                    <h5 id="textTitle">수강정정</h5>
                    <h6 id="textMain">
                        수강정정은 수강신청 확정결과 조회 이후로 총 2번 모두 여석 내 "<strong id="change_4">선착순</strong>"으로 이루어집니다.<br /><br />
                        첫번째는 <strong id="change_1">개강 전</strong> 수강정정으로, 3/4학년⇢1/2학년⇢<strong id="change_2">전체 학년</strong> 순으로 하루씩 이루어집니다.<br /><br />
                        이때 3/4학년과 1/2학년 수강 정정 기간에는 수강탈락, 폐강과목 및 미수강 신청자만 정정이 가능합니다.
                        <strong id="change_2"> 전체 학년</strong> 정정 기간에는 폐강, 탈락, 미수강과 관계없이
                        <strong id="change_2"> 전체 학년</strong>이 정정 가능합니다.<br /><br />
                        두번째는 <strong id="change_3">개강 후</strong> 수강정정으로, 이 역시 개강 후 일정 기간동안 여석 내
                        <strong id="change_4"> 선착순</strong>으로 확정됩니다.<br />
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="etc" title="기타과목">
                <div className="panel">
                    <div id="panel_">
                        <div id = "panelTitle"><strong>Keyword</strong></div>
                        <div id = "panelInfo">키워드를 누르면<br /> 해당 단어로 <br /> 이동합니다.</div>

                        <Link to = "etc_1" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">타학과</Button><br />
                        </Link>
                        <Link to = "etc_2" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">교직</Button><br />
                        </Link>
                        <Link to = "etc_3" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">공통</Button><br />
                        </Link>
                        <Link to = "etc_4" spy = {true} smooth = {true}>
                            <Button id = "panelBtn">강의유형</Button><br />
                        </Link>
                    </div>
                </div>

                <div className="textIn">
                    <h5 id="textTitle">기타과목</h5>
                    <h6 id="textMain">
                        수강신청 화면 탭 설명입니다.
                        <Image
                            style = {{width: "100%"}}
                            src="../images/info.PNG"/>
                        <ColoredLine color="#162B7D" />
                        ◉ <strong id="etc_1">타학과</strong>: 타학과의 전공 개설 과목을 조회할 수 있습니다.<br /><br />
                        ◉ <strong id="etc_2">교직</strong>: 전체 교직 과목을 검색할 수 있으며, 교직 탭에서는 교과구분이 '교직'인 과목만 검색됩니다.
                            학과에서 개설하는 교직 성격의 전공과목은 '전공' 탭에서 검색 가능합니다.<br /><br />
                        ◉ <strong id="etc_3">공통</strong>: 전 학과에서 모두 전공으로 인정받는 과목을 조회할 수 있습니다. 예) 산학협동교육, 해외인턴십<br /><br />
                        ◉ <strong id="etc_4">강의유형</strong>: 사이버, PBL, BL, 캡스톤 디자인, 프로젝트 또는 강의 언어별 개설 분반을 검색할 수 있습니다.<br />
                    </h6>
                </div>
            </Tab>
        </Tabs>
    );
}

class InfoKey extends React.Component {
    state = {search: ''};

    handleOnSearch = ({target: {value: search}}) => {
        this.setState({search});
    }

    render() {
        return(
            <div>
                <Navbars></Navbars>

                <div className="background">
                    <Image
                        className="img"
                        src="../images/FAQ_Text_Logo.png"/>
                </div>

                <div id="textFAQ">
                    수강순위, 최소이수학점 등 수강신청에 대한 <br />자세한 정보를 전달하는 페이지입니다.
                </div>

                <div className = "background3">
                    <ControlledTabs clickBtn = {this.state.search} />
                </div>

                <Footers />
            </div>
        )
    }
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

export default InfoKey;