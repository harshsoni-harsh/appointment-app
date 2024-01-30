// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {obj, onStar, format} = props
  const {title, date, star} = obj
  const splittedDate = date.split('-')
  const correctDate = new Date(
    splittedDate[0],
    splittedDate[1],
    splittedDate[2],
  )
  const imgSrc = star
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li>
      <div className="space-between">
        <p className="appointment-title">{title}</p>
        <button
          className="starBtn"
          type="button"
          onClick={() => onStar(obj.id)}
          data-testid="star"
        >
          <img className="star" src={imgSrc} alt="star" />
        </button>
      </div>
      <p className="appointment-date">
        Date: {format(correctDate, "dd MMMM yyyy, EEEE")}
      </p>
    </li>
  )
}

export default AppointmentItem
