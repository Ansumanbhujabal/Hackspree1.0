
function CalendarTest(props) {
    const { event } = props;
    const { title } = event;
    return (
        <>
        <h1>{title}</h1>
        </>
    );
}

export default CalendarTest;