import React, { useState } from 'react'
import StudentCard from './StudentCard'
import './Form.css'
var attendance = [];
export default function Form() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');

    function handleIdChange(event) {
        setId(event.target.value);
    }
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleCourseChange(event) {
        setCourse(event.target.value);
    }
    function handleAgeChange(event) {
        setAge(event.target.value);
    }
    function handleGenderChange(event) {
        setGender(event.target.value);
    }
    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function addAttendance(){
        attendance.push(
            {
                id: id,
                name: name,
                course: course,
                age: age,
                gender: gender,
                date: date
            }
        )
        alert("Attendance added!")
            setId(0);
            setName('');
            setCourse('');
            setAge(0);
            setGender('');
            setDate('');
    }

    return(
        <>
        <div className="container">
            <div className="form-container">
                <div className="field-container">
                    <h2>Student Attendance Information Form:</h2><br/>
                    ID Number: <input type="text" value={id} onChange={handleIdChange}></input><br /><br />
                    Name: <input type="text" value={name} onChange={handleNameChange}></input><br /><br />
                    Course: <input type="text" value={course} onChange={handleCourseChange}></input><br /><br />
                    Age: <input type="number" value={age} onChange={handleAgeChange}></input><br /><br />
                    <label>I am a Male:</label> <input type="radio" value="Male" checked ={gender === "Male"} onChange={handleGenderChange}></input><br /><br />
                    <label>I am a Female:</label><input type="radio" value="Female" checked ={gender ==="Female"} onChange={handleGenderChange}></input><br /><br />
                    Date: <input type="date" value={date} onChange={handleDateChange}></input><br /><br />
                    <button onClick={addAttendance}>Submit</button>
                </div>
                
                <div className="card-container">
                    <h2>Student to be added:</h2><br/>
                    <p>Student ID Number: <strong>{id}</strong></p><br/>
                    <p>Student Name: <strong>{name}</strong></p><br/>
                    <p>Student Course: <strong>{course}</strong></p><br/>
                    <p>Student Age: <strong>{age}</strong></p><br/>
                    <p>Student Gender: <strong>{gender}</strong></p><br/>
                    <p>Date of Attendance: <strong>{date}</strong></p>
                </div>
                
                <div className="studentlist">
                {attendance.length > 0 ? (<StudentCard students = {attendance} />) : (<p>No students.</p>)}
                </div>
            </div>
        </div>
        </>
    );
}