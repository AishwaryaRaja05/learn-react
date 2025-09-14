export default function Pad(props) {

    /*
    const { pad } = props
    const buttonStyle = {
        backgroundColor: pad.color
    }
    return(
        <button key={pad.id} style = {buttonStyle}></button>
    )*/
    return (
        <button style={{backgroundColor: props.color}}></button>
    )
}

