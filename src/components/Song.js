import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Linking } from 'react-native';
import Icon from './Icon'
import RichText from './RichText'


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
            tracksLink,
            youtubeLink,
            applemusicLink
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
                    transparent={true}
                    visible={this.state.expanded}
                    onRequestClose={() => {
                        this.setState({ expanded: false })
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 6 }}>
                                {title}
                            </Text>
                            <ModalRow
                                title="Artist:"
                                text={artist}
                            />
                            <ModalRow
                                title="Suggested male key:"
                                text={maleKey}
                            />
                            <ModalRow
                                title="Suggested female key:"
                                text={femaleKey}
                            />
                            <ModalRow
                                title="Suggested bpm:"
                                text={bpm}
                            />

                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly'
                            }}>

                                <IconLink
                                    title="YouTube"
                                    icon="youtube"
                                    link={youtubeLink}
                                />
                                <IconLink
                                    title="Spotify"
                                    icon="spotify"
                                    link={spotifyLink}
                                />
                                <IconLink
                                    title="Apple Music"
                                    icon="applemusic"
                                    link={applemusicLink}
                                />
                                <IconLink
                                    title="Tracks"
                                    icon="tracks"
                                    link={tracksLink}
                                />
                                <IconLink
                                    title="Chord Charts"
                                    icon="charts"
                                    link={chartsLink}
                                />

                            </View>


                            <Text style={{ marginTop: 6, fontWeight: 'bold' }}>Themes:</Text>
                            <Text >
                                {flowSubcategories.join(', ')}
                            </Text >
                            {notes && <Text style={{ marginTop: 6, fontWeight: 'bold' }}>Notes:</Text>}
                            <RichText text={notes} />

                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => {
                                    this.setState({ expanded: false })
                                }}>
                                <Text
                                    numberOfLines={1}
                                    style={styles.closeText}>close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const ModalRow = (props) => {
    if (!props.text) { return null }
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 6 }}>
            <Text>
                {props.title}
            </Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>
                {props.text}
            </Text>
        </View>

    )
}

const IconLink = (props) => {
    if (!props.link) { return null }
    return (
        <TouchableOpacity
            style={{ margin: 8 }}
            onPress={() => {
                Linking.openURL(props.link)
                    .catch((err) => console.error('An error occurred', err))
            }}
        >
            <Icon size={50} color={'#DF7892'} icon={props.icon} />
            <Text style={{ fontSize: 6, color: '#DF7892', textAlign: 'center' }}>{props.title}</Text>
        </TouchableOpacity>
    )
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
        justifyContent: 'center',
        padding: 40
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        borderColor: '#EDC331',
        borderWidth: 3,
        borderStyle: 'solid',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    closeButton: {
        width: '100%',
        marginTop: 10
    },
    closeText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
});


export default Song
