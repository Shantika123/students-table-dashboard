import React,{useState,useEffect} from "react";

function StudentForm({addStudent,updateStudent,editing}){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [age,setAge]=useState("");

const [show,setShow]=useState(false)

useEffect(()=>{
if(editing){
setName(editing.name)
setEmail(editing.email)
setAge(editing.age)
setShow(true)
}
},[editing])

const handleSubmit=(e)=>{
e.preventDefault()

if(!name || !email || !age){
alert("All fields required")
return
}

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailRegex.test(email)){
alert("Invalid email")
return
}

const student={name,email,age}

if(editing){
updateStudent({...student,id:editing.id})
}else{
addStudent(student)
}

setName("")
setEmail("")
setAge("")
setShow(false)
}

return(

<div>

<button className="add-btn" onClick={()=>setShow(true)}>
Add Student
</button>

{show && (

<div className="modal">

<div className="modal-content">

<h2>{editing ? "Edit Student" : "Add Student"}</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<button type="submit">
{editing ? "Update" : "Add"}
</button>

<button
type="button"
className="close-btn"
onClick={()=>setShow(false)}
>
Cancel
</button>

</form>

</div>

</div>

)}

</div>

)

}

export default StudentForm