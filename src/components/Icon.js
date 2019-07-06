
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faSpotify, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons'
import { faMale, faFemale, faDrum, faStickyNote, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    if (props.icon === "spotify") {
        return <FontAwesomeIcon color={props.color} size={props.size} style={props.style} icon={faSpotify} />
    }
    if (props.icon === "youtube") {
        return <FontAwesomeIcon color={props.color} size={props.size} style={props.style} icon={faYoutube} />
    }
    if (props.icon === "applemusic") {
        return <FontAwesomeIcon color={props.color} size={props.size} style={props.style} icon={faApple} />
    }
    if (props.icon === "male") {
        return (
            <FontAwesomeIcon
                color={props.color} size={props.size} style={props.style}
                icon={faMale}
            />
        )
    }
    if (props.icon === "female") {
        return (
            <FontAwesomeIcon
                color={props.color} size={props.size} style={props.style}
                icon={faFemale}
            />
        )
    }
    if (props.icon === "tempo") {
        return (
            <FontAwesomeIcon
                color={props.color} size={props.size} style={props.style}
                icon={faDrum}
            />
        )
    }
    if (props.icon === "charts") {
        return (
            <FontAwesomeIcon
                color={props.color} size={props.size} style={props.style}
                icon={faStickyNote}
            />
        )
    }
    if (props.icon === "tracks") {
        return (
            <FontAwesomeIcon
                color={props.color} size={props.size} style={props.style}
                icon={faLaptop}
            />
        )
    }
    if (props.icon === "star") {
        return (
            <FontAwesomeIcon
                color={props.color} size={props.size} style={props.style}
                icon={faStar}
            />
        )
    }
    if (props.icon === "check box") {
        return (
            <FontAwesomeIcon
                size={props.size}
                style={props.style}
                icon={props.checked ? faCheckSquare : faSquare
                }
            />
        )
    }
    return null
}