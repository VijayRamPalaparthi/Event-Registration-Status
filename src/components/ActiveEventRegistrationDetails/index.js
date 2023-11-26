// Write your code here
import './index.css'

const eventStatus = {
  open: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
  completed: 'REGISTERED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderYetToRegister = () => (
    <div className="active-detail-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="btn" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisterClosed = () => (
    <div className="active-detail-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1 className="des-registered">Registrations Are Closed Now!</h1>
      <p className="description">Stay tuned. We will reopen.</p>
    </div>
  )

  const renderAlreadyRegister = () => (
    <div className="active-detail-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image2"
      />
      <h1 className="des-registered">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderInitial = () => (
    <p className="detail-heading">
      Click on an event, to view its registration details
    </p>
  )

  switch (status) {
    case eventStatus.closed:
      return renderRegisterClosed()
    case eventStatus.open:
      return renderYetToRegister()
    case eventStatus.completed:
      return renderAlreadyRegister()
    default:
      return renderInitial()
  }
}
export default ActiveEventRegistrationDetails
