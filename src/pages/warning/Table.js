import React from 'react';
import "./Table.css";
import {Table} from "react-bootstrap";

class Tables extends React.Component {
    render() {
        return(
            <Table className="tables" style={{width:"80%"}} striped bordered hover>
                <thead>
                <tr>
                    <th>구분</th>
                    <th>대상</th>
                    <th>일정</th>
                    <th>방법</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1차 수강신청</td>
                    <td>전체 재학생</td>
                    <td>2월 11일 오전 9시 ~ 2월 16일 오후 5시</td>
                    <td>학교 홈페이지 {'>'} Quick Link {'>'} 수강신청<br/>
                        [약대 제외 모두 선착순 아님]</td>
                </tr>
                <tr>
                    <td>수강신청 결과조회</td>
                    <td>전체 재학생</td>
                    <td>2월 21일 오후 4시~</td>
                    <td>숙명 포털 시스템 {'>'} 학사 {'>'} 수강신청 {'>'} 수강조회</td>
                </tr>
                <tr>
                    <td>수강정정<br/><br/>
                        <h6 className="text">1차 폐강과목 신청자</h6>
                        <h6 className="text">탈락과목 신청자</h6>
                        <h6 className="text">미수강 신청자</h6>
                    </td>
                    <td>3/4학년</td>
                    <td>2월 22일 오전 8시 ~ 오후 5시</td>
                    <td>학교홈페이지 {'>'} Quick Link {'>'} 수강신청 [선착순]</td>
                </tr>
                <tr>
                    <td>수강정정<br/><br/>
                        <h6 className="text">1차 폐강과목 신청자</h6>
                        <h6 className="text">탈락과목 신청자</h6>
                        <h6 className="text">미수강 신청자</h6>
                    </td>
                    <td>1/2학년</td>
                    <td>2월 23일 오전 8시 ~ 오후 5시</td>
                    <td>학교홈페이지 {'>'} Quick Link {'>'} 수강신청 [선착순]</td>
                </tr>
                <tr>
                    <td>개강 전 수강정정<br/><br/>
                    <h6 className="text">폐강, 탈락, 미수강 상관없이 전체 학생 대상</h6>
                    </td>
                    <td>전체 재학생</td>
                    <td>2월 24일 오전 8시 ~ 오후 5시</td>
                    <td>학교홈페이지 {'>'} Quick Link {'>'} 수강신청 [선착순]</td>
                </tr>
                <tr>
                    <td>개강 후 수강정정</td>
                    <td>전체 재학생</td>
                    <td>3월 2일 오전 8시 ~ 3월 8일 24시(자정)</td>
                    <td>학교홈페이지 {'>'} Quick Link {'>'} 수강신청 [선착순]</td>
                </tr>
                <tr>
                    <td>수강포기(4주차)</td>
                    <td>수강 포기 희망자</td>
                    <td>3월 23일 오전 10시 ~ 3월 29일 오후 24시(자정)</td>
                    <td>숙명포털시스템 {'>'} 학사 {'>'} 수강신청 {'>'} 수강조회</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}
export default Tables
