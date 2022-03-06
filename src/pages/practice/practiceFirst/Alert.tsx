import React from 'react';
import {Alert} from "react-bootstrap";

class AlertIt extends React.Component {
    render() {
        return(
            <div>
                <Alert variant="info" style={{marginBottom:"30px"}}>
                    <Alert.Heading>수강신청 대기 창</Alert.Heading>
                    <p>
                       지금 있는 페이지는 수강신청을 하기 전의 창을 재현한 것으로, 실제 페이지는 모바일에 최적화 되어있지 않습니다. <br/>
                       본격적으로 신청 하기 전 3단계의 절차를 거칩니다. <br/>
                       앞의 2단계의 경우 수강신청 전에 진행해도 상관없습니다. <br/>
                       따라서 대부분의 학생들은 수강신청 전에 2단계까지 해놓은 상태에서 보통 대기합니다.
                    </p>
                </Alert>
            </div>
        )
    }
}
export default AlertIt