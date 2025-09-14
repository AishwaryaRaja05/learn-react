
/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */

import React from "react"

export default function Pad(props) {
    const [on, setOn] = React.useState(props.on)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <button
            style={{backgroundColor: props.color}}
            className={on ? "on" : undefined}
            onClick={toggle}
        ></button>
    )
}