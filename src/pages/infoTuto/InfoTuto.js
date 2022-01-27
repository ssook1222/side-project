import React from 'react';
import './InfoTuto.css'
import { Button, Image, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'

class InfoTuto extends React.Component {
    render() {
          const popoverBtn2 = (
            <Popover id="popover-basic">
              <Popover.Header as="h3" id = "boldTxt">수업평가결과조회</Popover.Header>
              <Popover.Body id = "justTxt">
                    과목별/교수별 이전 수업평가 결과 조회가 가능합니다.
              </Popover.Body>
            </Popover>
          );

          const ColoredLine = ({ color }) => (
            <div
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 3,
                    marginTop: "20px",
                    marginBottom: "20px"
                }}
            />
        );

        return(
            <div>
                <Navbars></Navbars>

                <h1
                style={{fontSize: "1.3vmax", fontWeight: "bold", color: "#162B7D", marginLeft: "1%"}}>
                    * 버튼 혹은 검은색 물음표를 클릭하면 해당 내용에 대한 설명을 확인할 수 있습니다.
                </h1>

                <h1
                style={{marginLeft: "1.5%"}}>
                    개설과목조회.
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip id="button-tooltip-2">
                            <h1>개설과목조회</h1>
                            <h2>그것에 대한 설명...</h2>
                        </Tooltip>}>
                        {({ ref, ...triggerHandler }) => (
                        <Button
                            variant="outline-light"
                            style = {{padding: "0px", marginLeft: "10px"}}
                            {...triggerHandler}
                            className="d-inline-flex align-items-center">
                            <Image
                            ref={ref}
                            style = {{width:"25px"}}
                            src="../images/tutorial/question.png"/>
                        </Button>
                        )}
                    </OverlayTrigger>
                </h1>

                <ColoredLine color="#387EC6" />

                <OverlayTrigger trigger="click" placement="right" overlay={popoverBtn2}>
                    <Button variant="success" id="tutoBtn">수업평가결과조회</Button>
                </OverlayTrigger>

                <Image id="tutoImg" src="../images/tutorial/2.png" />

                <Footers></Footers>
            </div>
        )
    }
}

export default InfoTuto;