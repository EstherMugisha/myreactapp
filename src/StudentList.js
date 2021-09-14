const StudentList = (props) => {
    const students = props.students
    return ( 
      <div className="student-list">
           {students.map((student)=>(
            <section className="singleStud">
             <h1>Student</h1>
             <p>id: {student.id}</p>
             <p>Name: {student.name}</p>
             <p>Major: {student.major}</p>
             </section>
        ))}
      </div>  
     );
}
 
export default StudentList;