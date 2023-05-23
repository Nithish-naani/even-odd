// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  clickBtn = () => {
    const evenOrOdd = this.randomNumber()
    this.setState(prevState => ({count: prevState.count + evenOrOdd}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="heading">Count {count}</h1>
          <p className="text">Count is {displayText}</p>
          <button className="button" type="button" onClick={this.clickBtn}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
