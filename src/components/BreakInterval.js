import React from 'react';

function BreakInterval(props) {
    function decreaseCounter() {
    if (props.breakInterval === 1 || props.breakInterval === 0) {
        return;
    }
    props.decreaseBreak()
    }

function increaseCounter() {
    if (props.breakInterval === 60) {
        return;
    }
    props.increaseBreak()
}

    return (
        <section>
                <h4 id="break-label">Break Length</h4>
            <section className="interval-container">
                <button disabled={props.isPlay === true ? "disabled" : ""}
                onClick={decreaseCounter} id="break-decrement">Down</button>
                <p className="interval-length" id="break-length">{props.breakInterval}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""}
                onClick={increaseCounter} id="break-increment">Up</button>
            </section>
        </section>
    )
}

export default BreakInterval;
