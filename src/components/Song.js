import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import Icon from './Icon'

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
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ expanded: !this.state.expanded })
                    }}
                    style={styles.button}>
                    {title && <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.titleText}>{title}</Text>}

                    {focusList && <Text style={styles.iconSection} title="Focus List Song"><Icon icon="star" style={{ color: '#EDC331' }} /></Text>}
                    {newSong && <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>}
                    {bpm && <Text style={styles.iconSection} title="Suggested tempo"><Icon icon="tempo" />{" "}{bpm}</Text>}
                    {maleKey && <Text style={styles.iconSection} title="Suggested male key"><Icon icon="male" />{" "}{maleKey}</Text>}
                    {femaleKey && <Text style={styles.iconSection} title="Suggested female key"><Icon icon="female" />{" "}{femaleKey}</Text>}
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.expanded}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setState({ expanded: false })
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

Song.propTypes = {
    song: PropTypes.object.isRequired,
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        overflow: 'hidden',
        marginRight: 'auto',
        flexShrink: 1,
        fontSize: 18
    },
    newBadge: {
        backgroundColor: '#DF7892',
        padding: 3,
        borderRadius: 4
    },
    newBadgeText: {
        fontSize: 10
    },
    iconSection: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 3
    },
    modal: {
        flex: 1,
        justifyContent: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        minHeight: 200,
    },
});


export default Song
