import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


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
            <View style={styles.card}   >
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ expanded: !this.state.expanded })
                    }}
                    style={styles.button}>
                    {title && <Text>{title}</Text>}
                </TouchableOpacity>
                <View style={this.state.expanded ? styles.panelOpen : styles.panelClosed}>
                    <Text>TEXT</Text>
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

    },
    button: {
        padding: 10
    },
    panelClosed: {
        height: 0
    },
    panelOpen: {
        height: 'auto',
        backgroundColor: 'purple'
    }
});


export default Song
