import NewMeetupForm from '../../components/meetups/NewMeetupForm';


const NewMeetupPage = () => {

    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
};

export default NewMeetupPage;