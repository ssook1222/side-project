import React from 'react';
import "./Warning.css";

class Information extends React.Component {
    render() {
        return(
            <div>
                <h3 className="title">학년별 수강여석 배분 안내</h3>
                <h3 className="title">수강포기(개강 후 4주차)</h3>
                <h3 className="title">수강신청 및 수강정정 시 유의사항</h3>
            </div>
        )
    }
}
export default Information