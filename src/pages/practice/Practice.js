import React, {useState} from 'react';
import { Button, Image, OverlayTrigger, Popover, Tooltip, Alert } from 'react-bootstrap';
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'
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
					<Image style = {{width: "1800px", marginBottom: "1.5%"}} src="../images/practice/header.png" />

					<div id='personal'>
						<h4 style={{marginTop: "25px", marginLeft: "1.5%"}}> 학생기본정보. </h4>

						<ColoredLine color="#387EC6" />

						<Image style = {{width: "1000px"}} src="../images/practice/info.png" />
					</div>

					<div id='registerList'>
						<h4 style={{marginTop: "25px", marginLeft: "1.5%"}}> 수강신청내역. </h4>

						<ColoredLine color="#387EC6" />
					</div>
				</div>


				<Footers></Footers>
			</div>
		)
	}
}

export default Practice;