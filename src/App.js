import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Loading from "./components/Loading";
import { exportToExcel } from "./utils/exportExcel";
import "./App.css";

function App() {

const [students,setStudents] = useState([]);
const [editing,setEditing] = useState(null);
const [loading,setLoading] = useState(true);
const [search,setSearch] = useState("");

useEffect(()=>{
setTimeout(()=>{
setLoading(false);
},1500)
},[])

const addStudent=(student)=>{
setStudents([...students,{...student,id:Date.now()}])
}

const updateStudent=(student)=>{
setStudents(
students.map(s=>s.id===student.id?student:s)
)
setEditing(null)
}

const deleteStudent=(id)=>{
const confirmDelete = window.confirm("Are you sure you want to delete this student?");
if(confirmDelete){
setStudents(students.filter(s=>s.id!==id))
}
}

const filteredStudents = students.filter(s =>
s.name.toLowerCase().includes(search.toLowerCase())
)

if(loading) return <Loading/>

return (

<div className="dashboard">

<div className="sidebar">

<h2>Dashboard</h2>

<ul>
<li>Students</li>
<li>Reports</li>
<li>Settings</li>
</ul>

</div>

<div className="main">

<h1 className="title">Students Dashboard</h1>

<div className="top-bar">

<input
className="search"
placeholder="Search student..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button
className="excel-btn"
onClick={()=>exportToExcel(filteredStudents)}
>
Download Excel
</button>

</div>

<StudentForm
addStudent={addStudent}
updateStudent={updateStudent}
editing={editing}
/>

<StudentTable
students={filteredStudents}
setEditing={setEditing}
deleteStudent={deleteStudent}
/>

</div>

</div>

);
}

export default App;