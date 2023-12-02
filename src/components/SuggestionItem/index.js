// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionObject} = this.props
    const {suggestion} = suggestionObject
    return (
      <li className="list-element">
        <p className="pera"> {suggestion} </p>
        <button className="button" type="button">
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </li>
    )
  }
}
export default SuggestionItem
