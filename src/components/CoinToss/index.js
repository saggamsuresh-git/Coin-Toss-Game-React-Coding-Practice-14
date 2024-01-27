// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, result: 'heads'}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({result: 'heads'})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({result: 'tails'})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {total, heads, tails, result} = this.state
    let imageUrl
    if (result === 'heads') {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    console.log(total, heads, tails)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <div className="toss-image-button-container">
            <img className="toss-image" src={imageUrl} alt="toss result" />
            <button type="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
