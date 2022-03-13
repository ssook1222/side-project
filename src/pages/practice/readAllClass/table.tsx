import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "../../../dto/Table";



const TableView: React.FC = () => {

    const [table, setTable] = useState<Table>({
        id: 0, lectureForm:" ", lectureName:" ",
        classType: "",
        dept: "",
        difficulty: "",
        lectureApply: 0,
        lectureClassfi: "",
        lectureLanguage: "",
        lectureNumber: 0,
        lecturePeople: 0,
        lecturePoint: "",
        lectureSeat: 0,
        lectureSubClass: 0,
        lectureTime: "",
        lectureType: "",
        lectureWarn: "",
        movie: "",
        pf: "",
        plan: "",
        professor: "",
        schoolExchange: "",
        snowboard: "",
        specification1: "",
        specification2: "",
        specification3: "",
        step: "",
        withComp: ""
    });

    useEffect(() => {
        getTable();
    }, []);

    const getTable = async () => {
        const res = await axios.get(`/api/tables/it`);
        console.log(res.data);
        setTable(res.data);
        console.log(table.lectureName);
    }


    return (
        <div>
            {
            }
        </div>
    );
};

export default TableView;