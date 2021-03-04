import React from 'react';

function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    function decreaseSession() {
        if (props.sessionLength === 1 || props.sessionLength === 0) {
            return;
        }
        props.decreaseSession()
    }
    return (
        <section>
                <h4 id="session-label">Session Length</h4>
            <section className="interval-container">
                <button disabled={props.isPlay === true ? "disabled" : ""}
                onClick={decreaseSession} id="session-decrement">Down</button>
                    <p className="interval-length" id="session-length">{props.sessionLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""}
                onClick={increaseSession} id="session-increment">Up</button>
            </section>
        </section>
    )
}

export default SessionLength;
