import React from 'react';
import "./Warning.css";
import Tables from "./Table";

class Schedule extends React.Component {
    render() {
        return(
            <div>
                <h3 className="title">2022-1학기 수강신청 일정</h3>
                <Tables></Tables>
            </div>
        )
    }
}
export default Schedule