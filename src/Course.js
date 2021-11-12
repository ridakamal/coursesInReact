import React from 'react';
import ReactDOM from 'react-dom';
const Header = (props) => {
    return (
      <div>
        <h1> {props.name} </h1>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
  
        <h2>This data is from 'Content' components</h2>
        {props.parts.map(item => <Parts myparts={item} />)}
  
  
      </div>
    )
  
  }
  const Parts = (props) => {
    return (
      <h3> exercises : {props.myparts.exercises}, part : {props.myparts.name}, {props.myparts.section}</h3>
    )
  }
  
  
  const Total = (props) => {
    return (
      <h2>Total excercises are {props.parts.reduce((acc, curr) => acc + curr.exercises, 0)}</h2>
    )
  }

  const Course = (props)=> {
    return (


        <div>
          {props.course.parts.map(item => <li> Part is  {item.name} ,      Exercise is {item.exercises} </li>)}
    
          <Header name={props.course.name} />
          <Content parts={props.course.parts} />
          <Total parts={props.course.parts} />
        </div>
    
      )

  }
  export default Course;
