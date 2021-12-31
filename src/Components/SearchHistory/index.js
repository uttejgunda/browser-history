import {Component} from 'react'
import './index.css'
import "SearchHistoryItems" from '../SearchHistoryItems'

class SearchHistory extends Component {
  state = {searchHistoryList: initialHistoryList, searchInput: ''}

  deleteItem = id => {
      const{searchHistoryList} = this.state
      const filteredSearchData = searchHistoryList.filter((eachItem) => (
          eachItem.id !== id
      ))
  }

  onChangeSearchInput = event => {
      const {searchInput} =  this.state
      const value = event.target.value
      this.setState({searchInput: value})
  }

  render() {
    const {searchHistoryList, searchInput} = this.state
    const initialHistoryList = this.props
    const updatedSearchHistory = searchHistoryList.filter(eachItem => 
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase())
    )

    return (
      <div className="bg-container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <input
            type="text"
            placeholder="Search history"
            className="search-bar"
            onChange = {this.onChangeSearchInput}
          />
        </nav>
        <ul className="search-items-wrapper">
          {updatedSearchHistory.map(eachItem => (
            <SearchHistoryItems
              key={eachItem.id}
              details={eachItem}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchHistory