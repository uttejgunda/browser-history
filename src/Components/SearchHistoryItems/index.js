import './index.css'

const SearchHistoryItems = props => {
  const {details, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button className="delete-btn" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchHistoryItems
