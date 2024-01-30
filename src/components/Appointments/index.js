// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointments: [], starred: false, dateVal: '', titleVal: ''}

  addAppointment = e => {
    e.preventDefault()
    const {titleVal, dateVal} = this.state
    const newAppointment = {
      id: uuidv4(),
      title: titleVal,
      date: dateVal,
      star: false,
    }
    this.setState(prev => ({
      appointments: [...prev.appointments, newAppointment],
      dateVal: '',
      titleVal: '',
    }))
  }

  updateDate = e => {
    this.setState({
      dateVal: e.target.value,
    })
  }

  updateTitle = e => {
    this.setState({
      titleVal: e.target.value,
    })
  }

  onStar = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(o => {
        if (o.id === id) {
          return {...o, star: !o.star}
        }
        return o
      }),
    }))
  }

  starred = () => {
    this.setState(prevState => ({
      starred: !prevState.starred,
    }))
  }

  render() {
    const {starred, dateVal, titleVal} = this.state
    let {appointments} = this.state
    if (starred) {
      appointments = appointments.filter(o => o.star)
    }
    return (
      <div className="body">
        <div className="outerCard">
          <h1>Add Appointment</h1>
          <div className="card">
            <form onSubmit={this.addAppointment}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                placeholder="Title"
                value={titleVal}
                onChange={this.updateTitle}
              />
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                placeholder="dd/mm/yyyy"
                value={dateVal}
                onChange={this.updateDate}
              />
              <button type="submit" className="addBtn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div>
            <div className="space-between">
              <h2>Appointments</h2>
              <button
                type="button"
                onClick={this.starred}
                className="starredBtn"
              >
                Starred
              </button>
            </div>
            <ul>
              {appointments.map(obj => (
                <AppointmentItem
                  obj={obj}
                  key={obj.id}
                  onStar={this.onStar}
                  format={format}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
