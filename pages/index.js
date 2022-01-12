import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'



const Homepage = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://testuser:holyriders@gekoparty.t4jd6.mongodb.net/meetups?retryWrites=true&w=majority',
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup=> ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString()
      })),
    },
    revalidate: 10,
  }
}

export default Homepage
