// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionList: suggestionsList}

  onChanging = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSuggestion = id => {
    const {suggestionList} = this.state
    const filterSuggestionsList = suggestionList.filter(each => each.id === id)
    this.setState({suggestionList: filterSuggestionsList})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    console.log(suggestionsList)
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card">
          <div className="input-element">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search Google"
              className="input-element"
              onChange={this.onChanging}
            />
          </div>
          <ul>
            {searchResult.map(eachSuggestionItem => (
              <SuggestionItem
                suggestionObject={eachSuggestionItem}
                key={eachSuggestionItem.id}
                updateSuggestion={this.updateSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
