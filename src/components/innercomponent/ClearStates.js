const ClearStates = (props) => {

    return (
        <>
            <button onclick={() => props.states}>{props.title}</button>
        </>
    );

}
export default ClearStates;