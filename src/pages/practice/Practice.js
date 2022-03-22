import React, {useState} from 'react';
import { Button, Image, Alert } from 'react-bootstrap';
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'
import ClassesApp from "./readApplication/ClassesApp";
import Classes from "./readAllClass/Classes";
import "./Practice.css"
class Practice extends React.Component {
	render() {
		const ColoredLine = ({ color }) => (
			<div
				style={{
					color: color,
					backgroundColor: color,
					height: 2,
					marginTop: "5px",
					marginBottom: "2%",
					width: "1800px"
				}}
			/>
		);

		function WarningSign() {
			const [show, setShow] = useState(true);
			if(show) {
				return (
					<Alert variant="danger" onClose={() => setShow(false)} dismissible>
						<Alert.Heading>연습상황</Alert.Heading>
						<p>
							올해 새내기가 된 김눈송❄️ <br />
							1. 전공과목: 1학년 전공 과목 <br />
							2. 교양선택: 경영학개론, 통계학입문 <br />
							3. 교양필수: 진로탐색과역량개발

						</p>
					</Alert>
				);
			}
			return <h1 />;
		}

		return(
			<div>
				<Navbars></Navbars>

				<WarningSign />

				<div className = "inContent">

					<div style={{backgroundColor: "#E3E3E3",
						width: "1800px", height: '70px'}}>
						<p id="sugangTxt">학부 수강신청</p>
					</div>

					<div style={{backgroundColor: "#F9F9F9",
						width: "1800px", height: '95px'}}>
						<Button id="logoutBtn">로그아웃</Button>
						<p id="logoutTxt">수강신청 종료후 반드시 "로그아웃" 버튼을 클릭해 주세요.</p>
					</div>

					<div id='personal'>
						<p id ="title"> 학생기본정보. </p>

						<ColoredLine color="#387EC6" />

						<Image style = {{width: "1000px", marginLeft: "25px", marginBottom: "20px"}}
						       src="../images/practice/info.png" />
					</div>

					<div id='registerList'>
						<p id ="title"> 수강신청내역. </p>

						<ColoredLine color="#387EC6" />
					</div>

					<Button id="checkBtn" href="/practice/ranking">수강순위조회</Button>

					<ClassesApp/>

					<div className="AppSum">
					    <p id="sumNum">총 과목 수:</p>
					    <p id="sumGrade">총 신청학점:</p>
					    <p id="sumAble">수강가능학점:</p>
					</div>

					<div id='registerList'>
						<p id ="title"> 개설과목조회. </p>

						<ColoredLine color="#387EC6" />

						<Classes />
					</div>

				</div>
				<Footers></Footers>
			</div>
		)
	}
}

export default Practice;