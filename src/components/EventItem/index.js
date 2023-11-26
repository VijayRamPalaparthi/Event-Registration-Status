// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetail, onClickStatusUpdate} = props
  const {imageUrl, name, location, registrationStatus} = eventDetail
  const addStatus = () => {
    onClickStatusUpdate(registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button className="event-button" type="button" onClick={addStatus}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
