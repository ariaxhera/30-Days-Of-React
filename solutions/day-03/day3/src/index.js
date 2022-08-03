import React from 'react';
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabenehImage.jpg'
import frontend from './images/frontend_technologies.png'



const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'


// EXERCISES ///////////////////////////////////////////////////////////////////////////////////

// const exercise1 = (
//   <div>
//     <img src={frontend} alt='website' />
//       <div>
//       </div>
//   </div>
// )

// const Exercise2 = () => (
//   <div style={{ margin: '40px', maxHeight: '80vh', display: 'flex', alignItems: 'center', flexDirection: 'column', background: 'lightblue', borderRadius: '10px'}}>
//     <h1 style={{marginTop: '60px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace', fontSize: '36px'}}>Subcribe</h1>
//       <p style={{ display: 'flex', marginBottom: '40px', justifyContent: 'center', alignItems: 'center', opacity: '60%'}}>Sign up with your email address to receive news and updates</p>
//       <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', flexDirection: 'column'}}>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//       <input placeholder='First Name' style={{ padding: '5px', borderRadius: '4px', margin: '5px', borderWidth: '0px', height: '30px', width: '200px'}} key='name'></input>
//       <input placeholder='Last Name' style={{ padding: '5px', borderRadius: '4px', margin: '5px', borderWidth: '0px', height: '30px', width: '200px'}} key='lname'></input>
//       <input placeholder='Email' style={{ padding: '5px', borderRadius: '4px', margin: '5px', borderWidth: '0px', height: '30px', width: '200px'}} key='email'></input>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
//       <button style={{ width: '300px', height: '40px', borderRadius: '4px', background: 'coral', borderColor: 'coral', margin: '40px', borderWidth: '0px', color: 'white', fontFamily: 'sans-serif', fontSize: '14px'}} key='button'>Subcribe</button>
//       </div>
//       </div>
//   </div>
// )

// const RandomColors = () => (
//   <div style={{margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//     <button style={{ background: '#518cef', borderWidth: '0px', borderRadius: '4px', width: '80vw', height: '50px', margin: '1px'}}>#518cef</button>
//     <button style={{ background: '#3b10c4', borderWidth: '0px', borderRadius: '4px', width: '80vw', height: '50px', margin: '1px'}}>#3b10c4</button>
//     <button style={{ background: '#9aede6', borderWidth: '0px', borderRadius: '4px', width: '80vw', height: '50px', margin: '1px'}}>#9aede6</button>
//     <button style={{ background: '#8ee763', borderWidth: '0px', borderRadius: '4px', width: '80vw', height: '50px', margin: '1px'}}>#8ee763</button>
//     <button style={{ background: '#a30dd0', borderWidth: '0px', borderRadius: '4px', width: '80vw', height: '50px', margin: '1px'}}>#a30dd0</button>    
//   </div>
// )

// const FrImage = () => (
//   <div>
//     <img src='./images/frontend_technologies.jpg'></img>
//   </div>
// )

// EXERCISES ///////////////////////////////////////////////////////////////////////////////////

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {}
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

    return (
      <div className='app'>
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


