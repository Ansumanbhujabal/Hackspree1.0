
function CommunityCal () {
    const events = useSelector(
        (store) => store.events.events
      );
    return (
        <>
        <h1>This is the community calendar page! Calendar and user actions will go here.</h1>
        </>
    )
}

export default CommunityCal;