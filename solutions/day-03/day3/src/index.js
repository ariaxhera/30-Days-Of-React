import React from 'react';
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabenehImage.jpg'
import frontend from './images/frontend_technologies.png'

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh' />
  </div>
)

const rootElement = document.getElementById('root')

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)


const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const exercise1 = (
  <div>
    <img src={frontend} alt='website' />
      <div>
      </div>
  </div>
)

const exercise2 = (
  <div style={{ margin: '40px', maxHeight: '80vh', display: 'flex', alignItems: 'center', flexDirection: 'column', background: 'lightblue', borderRadius: '10px'}}>
    <h1 style={{marginTop: '60px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace', fontSize: '36px'}}>Subcribe</h1>
      <p style={{ display: 'flex', marginBottom: '40px', justifyContent: 'center', alignItems: 'center', opacity: '60%'}}>Sign up with your email address to receive news and updates</p>
      <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <input placeholder='First Name' style={{ padding: '5px', borderRadius: '4px', margin: '5px', borderWidth: '0px', height: '30px', width: '200px'}} key='name'></input>
      <input placeholder='Last Name' style={{ padding: '5px', borderRadius: '4px', margin: '5px', borderWidth: '0px', height: '30px', width: '200px'}} key='lname'></input>
      <input placeholder='Email' style={{ padding: '5px', borderRadius: '4px', margin: '5px', borderWidth: '0px', height: '30px', width: '200px'}} key='email'></input>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <button style={{ width: '300px', height: '40px', borderRadius: '4px', background: 'coral', borderColor: 'coral', margin: '40px', borderWidth: '0px', color: 'white', fontFamily: 'sans-serif', fontSize: '14px'}} key='button'>Subcribe</button>
      </div>
      </div>
  </div>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
    {exercise1}
    {exercise2}
  </div>
)

ReactDOM.render(app, rootElement)