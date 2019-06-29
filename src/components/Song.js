import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

class Song extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }
    render() {
        const {
            title,
            artist,
            maleKey,
            femaleKey,
            focusList,
            notes,
            flowSubcategories,
            spotifyLink,
            newSong,
            bpm,
            chartsLink,
            tracksLink
        } = this.props.song
        return (
            <View
                style={styles.card}
                onClick={() => { this.setState({ expanded: !this.state.expanded }) }}
            >
                <View style={styles.button}>
                    {title && <Text>{title}</Text>}
                </View>
            </View>
        )
    }
}

Song.propTypes = {
    song: PropTypes.object.isRequired,
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'yellow',
    },
    button: {
        padding: 10
    }
});


export default Song
