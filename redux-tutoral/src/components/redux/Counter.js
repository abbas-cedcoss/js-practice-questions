import { connect } from "react-redux"

function Counter(props) {
    return <>
        Counter {props?.count}

        <button onClick={() => {
            props.incr({ type: 'increment' })
        }} >Incr</button>
    </>
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incr: () => dispatch({
            type: 'increment',
            payload: 1
        }),
        decr: () => dispatch({
            type: 'decrement',
            payload: 1
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)