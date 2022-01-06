import { Fragment } from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="first meetup"
      address="some street, some city"
      description="this is the first meetup"
    />
  )
}

export default MeetupDetails
