import {Component} from 'react'
import './index.css'
import SearchHistoryItems from '../SearchHistoryItems'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class SearchHistory extends Component {
  state = {searchHistoryList: initialHistoryList, searchInput: ''}

  deleteItem = id => {
    const {searchHistoryList} = this.state
    const filteredList = searchHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({searchHistoryList: filteredList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchHistoryList, searchInput} = this.state
    const updatedSearchHistory = searchHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <nav className="nav-bar">
          <div className="nav-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
          </div>
          <input
            type="search"
            placeholder="Search history"
            className="search-bar"
            onChange={this.onChangeSearchInput}
          />
        </nav>
        {updatedSearchHistory === '' && (
          <p className="no-results-text">There is no history to show</p>
        )}
        {updatedSearchHistory !== '' && (
          <ul className="search-items-wrapper">
            {updatedSearchHistory.map(eachItem => (
              <SearchHistoryItems
                key={eachItem.id}
                details={eachItem}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default SearchHistory
