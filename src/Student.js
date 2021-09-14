import { useState } from "react";
import React from "react";
import StudentList from "./StudentList";
const Student = () => {
    let textInput=React.createRef();
    const[students, setStudents]=useState([
        {id: "111", name: "Meti", major:"CS"},
        {id: "112", name: "Tedros", major:"CS"},
        {id: "113", name: "Pascal", major:"CS"}
    ]);
    const nameHandler=(newName)=>{
        let currentStudents =[...students];
        currentStudents[0].name=newName;
        setStudents(currentStudents)
    }

    function handleClick(){
        nameHandler(textInput.current.value);
    }


    return ( 
        <div className="student"> 
            <div className="studgroup">
            <StudentList students={students }/>
            </div>
            <input type="text" ref={textInput}/>
        <button onClick={handleClick}>Change Name </button>
    
        </div>

     );
}
 
export default Student;