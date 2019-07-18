import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Modal from "react-native-modal";
import Icon from './Icon'
import RichText from './RichText'


class Song extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }
    handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y,
        });
    };

    handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };

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
            applemusicLink,
            onSongLink
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

                    {focusList && <View style={styles.iconSection} ><Icon size={14} icon="star" style={{ color: '#EDC331' }} /></View>}
                    {newSong && <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>}
                    {bpm && <View style={styles.iconSection} ><Icon size={14} icon="tempo" /><Text style={styles.iconSectionText}> {bpm}</Text></View>}
                    {maleKey && <View style={styles.iconSection} ><Icon size={14} icon="male" /><Text style={styles.iconSectionText}>{maleKey}</Text></View>}
                    {femaleKey && <View style={styles.iconSection} ><Icon size={14} icon="female" /><Text style={styles.iconSectionText}>{femaleKey}</Text></View>}
                </TouchableOpacity>
                <Modal
                    isVisible={this.state.expanded}
                    onSwipeComplete={() => this.setState({ expanded: false })}
                    onBackdropPress={() => this.setState({ expanded: false })}
                    swipeDirection={['left', 'right']}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                >
                    <View style={styles.modal}>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                        >

                            <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 6 }}>
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
                                <IconLink
                                    title="OnSong"
                                    icon="charts"
                                    link={onSongLink}
                                />

                            </View>


                            <Text style={{ marginTop: 6, fontWeight: 'bold' }}>Themes:</Text>
                            <Text >
                                {flowSubcategories && flowSubcategories.join(', ')}
                            </Text >
                            {notes && <Text style={{ marginTop: 6, fontWeight: 'bold' }}>Notes:</Text>}
                            <RichText text={notes} />


                        </ScrollView>
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
            <Icon size={40} color={'#DF7892'} icon={props.icon} />
            <Text style={{ fontSize: 8, color: '#DF7892', textAlign: 'center', marginTop: 3 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

Song.propTypes = {
    song: PropTypes.object.isRequired,
}


const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        overflow: 'hidden',
        marginRight: 'auto',
        flexShrink: 1,
        fontSize: 14
    },
    newBadge: {
        backgroundColor: '#DF7892',
        padding: 3,
        borderRadius: 4,
        marginRight: 3,
    },
    newBadgeText: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    iconSection: {
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconSectionText: {
        fontSize: 12
    },
    modal: {
        maxHeight: 500,
        maxWidth: 360,
        minWidth: 260,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        borderColor: '#EDC331',
        borderWidth: 6,
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
        marginTop: 10,
        padding: 6
    },
    closeText: {
        color: '#2886AE',
        fontSize: 18,
        textAlign: 'center'
    },
});


export default Song
