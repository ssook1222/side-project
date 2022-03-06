import React from 'react';
import "./Table.css";
import {Table} from "react-bootstrap";

class Tables extends React.Component {
    render() {
        return(
            <Table className="tables" style={{width:"80%"}} striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>정정 기간</th>
                    <th>학년</th>
                    <th>전공 과목</th>
                    <th>교양 과목</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2월 22일 오전 8시 ~ 오후 5시</td>
                    <td>3~4학년</td>
                    <td>총 여석의 50%</td>
                    <td>총 여석의 40%</td>
                </tr>
                <tr>
                    <td>2월 23일 오전 8시 ~ 오후 5시</td>
                    <td>1~2학년</td>
                    <td>총 여석의 50%</td>
                    <td>총 여석의 60%</td>
                </tr>
                <tr>
                    <td>2월 24일 오전 8시 ~ 오후 5시</td>
                    <td>전체학년</td>
                    <td colSpan={2}>전체여석</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}
export default Tables
