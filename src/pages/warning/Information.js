import React from 'react';
import "./Warning.css";
import Sugangtables from "./SugangTable"

class Information extends React.Component {
    render() {
        return(
            <div>
                <h3 className="title">학년별 수강여석 배분 안내</h3>
                <h5 className="para" style={{marginBottom:"30px"}}>
                    1) 폐강/수강탈락자, 미수강신청자 정정기간에 수강여석을 학년별로 구분하여 시행합니다.<br/><br/>
                    2) 학년별 수강정정 시 특정 학년이 불이익을 받지 않도록 여석을 다음과 같이 배분하여 적용하오니 참고바랍니다.<br/></h5>
                <Sugangtables></Sugangtables>
                <h6 className="para">
                    * (교양필수과목) 교양필수 과목은 과목별 이수학년을 고려하여 위 교양과목 여석 비율과 다르게 조정할 수 있습니다.<br/><br/>
                    * (전체 학년) 개강 전 전체학년 정정기간에는 폐강/탈락/미수강 관계없이 전체 재학생 대상<br/>
                </h6>
                <h3 className="title">수강포기(개강 후 4주차)</h3>
                <h5 className="para">
                    - 개강후 4주차(3/23(수)~3/29(화)) 이후는 <b>포기 불가</b><br/><br/>
                    - 수강신청 최저학점(<b>9학점</b>(13학번 이전 2학점) / 7학기(약대11학기)부터 2학점) 미만으로는 수강포기 불가<br/>
                </h5>
                <h3 className="title">수강신청 및 수강정정 시 유의사항</h3>
                <h5 className="para" style={{marginBottom:"50px"}}>
                    1) 수강신청, 수강정정, 수강포기 후 반드시 숙명포털에서 수강조회하여 최종 수강내역을 학생 본인이 확인해야 합니다.<br/><br/>
                    2) 수강신청여부 확인 없이 출석부에 수기로 이름을 기입하여 수강한 학생은 학점을 인정받을 수 없습니다.<br/><br/>
                    3) 수강취소하지 않고 임의로 수업에 참여하지 않은 과목은 F학점을 받게 됩니다.<br/><br/>
                </h5>
            </div>
        )
    }
}
export default Information