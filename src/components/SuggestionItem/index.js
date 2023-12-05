// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionObject, updateSuggestion} = props
  const {id, suggestion} = suggestionObject
  const onClicking = () => {
    updateSuggestion(id)
  }
  return (
    <li className="list-element">
      <p className="pera"> {suggestion} </p>
      <button className="button" type="button" onClick={onClicking}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
