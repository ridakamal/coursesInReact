import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
import reportWebVitals from './reportWebVitals';
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


const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
      name: 'Basics of React',
      exercises: 8,
      section: 5
    },
    {
      name: 'Using props',
      exercises: 10,
      section: 6
    },
    {
      name: 'Component states',
      exercises: 12
    }
  ]



  /*let i;
  for(i=0; i<parts.length; i++) {
  y = document.write(parts[i]);
  return y;
  } */
  return (


    <div>
      {parts.map(item => <li> Part is  {item.name} ,      Exercise is {item.exercises} </li>)}

      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>

  )


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

