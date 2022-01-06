import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    adress: 'Some Adress, 4355 Haugesund',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    adress: 'Some Adress again, 4355 Haugesund',
    description: 'This is a second meetup',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    adress: 'Some Adress somewhere, 4355 Haugesund',
    description: 'This is a third meetup',
  },
]

const Homepage = (props) => {

    

  return <MeetupList meetups={props.meetups}></MeetupList>
}

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

export default Homepage
