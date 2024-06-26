import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {search: ''}

  check = num => this.setState({search: num})

  makechanges = event => {
    this.setState({search: event.target.value})
  }
  render() {
    const {search} = this.state
    const {suggestionsList} = this.props
    const modifiedList = suggestionsList.filter(element =>
      element.suggestion.toUpperCase().includes(search.toUpperCase()),
    )
    return (
      <div className="search-container">
        <div className="sub">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="sub-container">
            <div className="search-bag">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                className="search-bar"
                type="search"
                placeholder="Search Google"
                onChange={this.makechanges}
                value={search}
              />
            </div>
            <ul className="suggestions-bag">
              {modifiedList.map(element => (
                <SuggestionItem
                  item={element}
                  key={element.id}
                  Insertion={this.check}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
