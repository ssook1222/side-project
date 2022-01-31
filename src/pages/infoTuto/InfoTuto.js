import React from 'react';
import './InfoTuto.css'
import { Button, Image, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'

class InfoTuto extends React.Component {
    render() {
          const popoverBtn2 = (
            <Popover id="popover-basic">
              <Popover.Header as="h3" id = "boldTxt">수강순위 조회</Popover.Header>
              <Popover.Body id = "justTxt">
                  신청한 분반 내에서 본인의 수강순위를 조회하여 수강확전/탈락 여부를 미리 예상해 볼 수 있습니다.
              </Popover.Body>
            </Popover>
          );

          const popoverBtn3 = (
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
                
                <Image style = {{width: "100%", marginBottom: "25px"}} src="../images/tutorial/0.png" />

                <div className='registerList'>
                    <h4 style={{marginTop: "25px", marginLeft: "1.5%", fontSize: "1.7vw" }}>학생기본정보.</h4>

                    <ColoredLine color="#387EC6" />
                    
                    <Image id="tutoImg" src="../images/tutorial/1.png" />
                </div>

                <div className='registerList'>
                    <h4
                    style={{marginLeft: "1.5%", fontSize: "1.7vw"}}>
                        수강신청내역.
                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip id="button-tooltip-2">
                                <h5>수강신청내역</h5>
                                <h6>개설과목 조회에서 과목 및 분반 조회 후 신청 버튼을 클릭해 수강신청한 과목을 확인할 수 있습니다.
                                    <br/> 수강신청 내역에서는 취소할 과목에 대해 취소 버튼을 클릭해 수강 취소를 할 수 있습니다.</h6>
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
                        
                    </h4>

                    <ColoredLine color="#387EC6" />
                    
                    <OverlayTrigger trigger="click" placement="right" overlay={popoverBtn2}>
                        <Button variant="success" id="tutoBtn">수강순위 조회</Button>
                    </OverlayTrigger>

                    <Image id="tutoImg" src="../images/tutorial/2.png" />
                </div>

                <div className='classSearch'>
                    <h4
                    style={{marginLeft: "1.5%", fontSize: "1.7vw" }}>
                        개설과목조회.
                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip id="button-tooltip-2">
                                <h5>개설과목조회</h5>
                                <h6>과목별 조회 탭을 이용하여 희망 과목을 조회한 후 신청 버튼을 눌러서 수강신청을 진행할 수 있습니다.</h6>
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
                    </h4>

                    <ColoredLine color="#387EC6" />

                    <OverlayTrigger trigger="click" placement="right" overlay={popoverBtn3}>
                        <Button variant="success" id="tutoBtn">수업평가결과조회</Button>
                    </OverlayTrigger>

                    <Image id="tutoImg" src="../images/tutorial/3_1.png" />
                </div>

                <Footers></Footers>
            </div>
        )
    }
}

export default InfoTuto;