import Typical from 'react-typical';

const GsTypical = (props) => {

    //let typingText = ['Web Developer', props.speed, 'and Designer', props.speed];
console.log(props.steps);
    return (
        <>
            <Typical
                steps={props.steps}
                loop={props.loop}
            />
        </>
    );
}
export default GsTypical;