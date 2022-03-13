import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "../../../dto/Table";


const TableView: React.FC = () => {

    const [table, setTable] = useState<Array<Table>>([]);

    useEffect(() => {
        getTable();
    }, []);

    const getTable = async () => {
        const res = await axios.get(`/api/tables/it`);
        console.log(res.data);
        setTable(res.data);
    }


    return (
        <div>
            <h4>plz</h4>
            {
                table.map((table: Table)=>
                    <Row style={{
                        paddingBottom:"10px",paddingTop:"10px",
                        borderBottom:"1px solid #dddddd"}}>
                            <Col style={{display:"inline-block"}} xs={12} md={8}>{table.id}</Col>
                            <Col style={{display:"inline-block"}} xs={6} md={4}>{table.lectureName}</Col>
                    </Row>
                )
            }
        </div>
    );
};

export default TableView;