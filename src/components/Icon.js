
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faMale, faFemale, faDrum, faStickyNote, faLaptop, faStar } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    if (props.icon === "spotify") {
        return <FontAwesomeIcon icon={faSpotify} />
    }
    if (props.icon === "chevron") {
        return (
            <FontAwesomeIcon
                style={{
                    transform: props.direction === "up" ? 'rotate(180deg)' : '',
                    transition: 'transform 0.15s'
                }}
                icon={faChevronDown}
            />
        )
    }
    if (props.icon === "male") {
        return (
            <FontAwesomeIcon
                icon={faMale}
            />
        )
    }
    if (props.icon === "female") {
        return (
            <FontAwesomeIcon
                icon={faFemale}
            />
        )
    }
    if (props.icon === "tempo") {
        return (
            <FontAwesomeIcon
                icon={faDrum}
            />
        )
    }
    if (props.icon === "charts") {
        return (
            <FontAwesomeIcon
                icon={faStickyNote}
            />
        )
    }
    if (props.icon === "tracks") {
        return (
            <FontAwesomeIcon
                icon={faLaptop}
            />
        )
    }
    if (props.icon === "star") {
        return (
            <FontAwesomeIcon
                icon={faStar}
            />
        )
    }
    if (props.icon === "check box") {
        return (
            <FontAwesomeIcon
                icon={props.checked ? faCheckSquare : faSquare
                }
            />
        )
    }
    return null
}