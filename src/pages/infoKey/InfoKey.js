import React, {useState} from 'react';
import {Button, Image, Tab, Table, Tabs} from 'react-bootstrap';
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'
import './InfoKey.css'

function ControlledTabs(props) {
    const [key, setKey] = useState('');
    var str = '졸업을 하기 위해서 들어야 되는 필수 과목들,\n' +
        '학교 홈페이지에 있는 졸업이수학점표에서 자신이 얼마나 전공 수업을 들어야 하는지 확인할 수 있습니다.\n' +
        '특히 전공필수의 경우에는 다 듣지 않으면 졸업을 하지 못하니, 권장 학년에 맞춰 듣는 것을 추천합니다.'

    str = str.replace(/\\r\\n|\\n\\r/gm, "<br>")

    return (
        <Tabs
            id="controlled-tab"
            defaultActiveKey="level"
            onSelect={(k) => setKey(k)}
            className="mb-3">

            <Tab eventKey="major" title="전공" >
                <div className="textIn">
                    <h5 id="textTitle">전공</h5>
                    <h6 id="textMain">
                        <Highlighter highlight={props.clickBtn} >
                            졸업을 하기 위해서 들어야 되는 필수 과목들, \n
                            학교 홈페이지에 있는 졸업이수학점표에서 자신이 얼마나 전공 수업을 들어야 하는지 확인할 수 있습니다.
                            특히 전공필수의 경우에는 다 듣지 않으면 졸업을 하지 못하니, 권장 학년에 맞춰 듣는 것을 추천합니다.
                        </Highlighter>
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="general" title="교양">
                <div className="textIn">
                    <h5 id="textTitle">교양</h5>
                    <h6 id="textMain">
                        <Highlighter highlight={props.clickBtn}>
                            교양 과목은 교양필수와 교양일반으로 나뉩니다.
                            교양필수과목은 과멱별로 지정된 학년과 학기에 이수를 완료하는 것이 좋으며, 해당 과목으로는
                            융합적 사고와 글쓰기, 비판적 사고와 토론, 세계시민교육과 리더십, 진로탐색과 역량개발, 논리적 사고와 소프트웨어와
                            영어 교양필수과목들이 존재합니다.
                            단, 영어 교양필수 과목은 공인영어성적을 가지고 있거나 영어권 국가의 국적 학생의 경우 이수를 면제해줍니다.
                        </Highlighter>
                        <br /> 자세한 내용은
                        <a href={"https://www.sookmyung.ac.kr/sookmyungkr/1866/subview.do"}>
                             *학교홈페이지&gt;학사정보&gt;교육과정&gt;교양교육과정
                        </a>에서 확인할 수 있습니다.
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="level" title="수강순위">
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
                                <td colSpan="3">※ 교양필수과목의 경우 1학년생을 우선적으로 확정함.<br />
                                    단, 「논리적사고와소프트웨어」 교과목은 2학년생을 우선적으로 확정함.</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">전공과목</td>
                                <td>제1전공/학생자율설계전공자</td>
                                <td>복수·부전공/연계전공자</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td colSpan="3">※ 동일조건에서는 학년순(4학년⇢3학년⇢2학년⇢1학년)
                                    ⇢ 직전학기 이수학점순 ⇢ 직전학기 성적순으로 수강 확정됨.</td>
                            </tr>
                            </tbody>
                        </Table>

                        <Highlighter highlight={props.clickBtn}>
                            - (1학년 우선) 1학년 전공과목의 경우, 각 전공의 1학년생을 우선적으로 확정(단, 우선 순위 예외적용 대상과목에 한함)하며,
                            직전학기 이수학점순에서 순위 확정시 신입생의 경 우에는 임의로 순위가 정해집니다.
                            - (장애학생) 1차 수강신청기간 중 수강신청 확정기준에서 최우선순위를 적용합니다.
                            - (연계전공 인정 교양과목) 연계전공에서 인정하는 교양과목은 연계전공 이수자(2순위)⇢직전학기 이수학점(3순위) 순으로 적용합니다.
                            - (수강탈락) 1차 수강신청에서 탈락 시 학년별 수강정정 우선기간 정정 가능합니다.
                        </Highlighter>
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="change" title="수강정정">
                <div className="textIn">
                    <h5 id="textTitle">수강정정</h5>
                    <h6 id="textMain">
                        내용
                    </h6>
                </div>
            </Tab>

            <Tab eventKey="etc" title="기타과목">
                <div className="textIn">
                    <h5 id="textTitle">기타과목</h5>
                    <h6 id="textMain">
                        내용
                    </h6>
                </div>
            </Tab>
        </Tabs>
    );
}

const Highlighter = ({children, highlight}) => {
    if (!highlight) return children;
    const regexp = new RegExp(highlight, 'g');
    const matches = children.match(regexp);
    var parts = children.split(new RegExp(`${highlight.replace()}`, 'g'));

    for (var i = 0; i < parts.length; i++) {
        if (i !== parts.length - 1) {
            let match = matches[i];
            while(parts[i + 1] === '') {
                match += matches[++i];
            }

            parts[i] = (
                <React.Fragment key={i}>
                    {parts[i]}
                    <span className="highlighted">
                        {match}
                    </span>
                </React.Fragment>
            );
        }
    }
    return <div className="highlighter">{parts}</div>;
};

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

                    <div className="panel">
                        <div id="panel_">
                            <div id = "panelTitle"><strong>Keyword</strong></div>
                            <div id = "panelInfo">키워드를 누르면<br /> 해당 단어가 있는 곳으로<br /> 이동합니다.</div>
                            <Button value = {'졸업이수학점표'} id = "panelBtn" onClick={this.handleOnSearch}>졸업이수학점표</Button><br />
                            <Button value = {'전공필수'} id = "panelBtn" onClick={this.handleOnSearch}>전공필수</Button><br />
                            <Button value = {'전공선택'} id = "panelBtn" onClick={this.handleOnSearch}>전공선택</Button><br />
                            <Button value = {'심화전공'} id = "panelBtn" onClick={this.handleOnSearch}>심화전공</Button><br />
                            <Button value = {'다전공'} id = "panelBtn" onClick={this.handleOnSearch}>다전공</Button><br />
                        </div>
                    </div>
                </div>

                <Footers></Footers>
            </div>
        )
    }
}

export default InfoKey;