import './index.css'

const SuggestionItem = props => {
  const {item, Insertion} = props
  const makecheck = () => Insertion(item.suggestion)
  console.log(props)
  return (
    <li className="container">
      <p className="description">{item.suggestion}</p>
      <button className="button" onClick={makecheck}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
