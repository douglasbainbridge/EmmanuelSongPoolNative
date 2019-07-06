import React from 'react'
import List from '../components/List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import HorizontalScroll from '../components/HorizontalScroll';
import ListColumn from '../components/ListColumn';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

function PrePreach(props) {
    const callToWorshipDeclaration = filterSongBySubCat(props.filteredSongs, 'Call To Worship', 'Declaration & Praise')
    const callToWorshipDraw = filterSongBySubCat(props.filteredSongs, 'Call To Worship', 'Drawing Near')
    const revelationName = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Name of Jesus')
    const revelationSufficiency = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Sufficiency of Christ')
    const revelationStory = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Gospel Story')
    const revelationAdoption = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Adoption in Christ')
    const revelationAscended = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Ascended Christ')
    const revelationAssurance = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Assurance in Christ')
    const revelationEternity = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Eternity')
    const revelationLove = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Love of God')
    const revelationGoodness = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Goodness of God')
    const revelationGreatness = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Greatness of God')
    const revelationFaithfulness = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Faithfulness of God')
    const revelationHoliness = filterSongBySubCat(props.filteredSongs, 'Revelation', 'Holiness of God')
    const revelationSuffering = filterSongBySubCat(props.filteredSongs, 'Revelation', 'God in Suffering')
    const responseAdoration = filterSongBySubCat(props.filteredSongs, 'Response', 'Adoration')

    const responseReverence = filterSongBySubCat(props.filteredSongs, 'Response', 'Reverence & Awe')
    const responseSurrender = filterSongBySubCat(props.filteredSongs, 'Response', 'Surrender')
    const responseDependence = filterSongBySubCat(props.filteredSongs, 'Response', 'Dependence')
    const responseCelebration = filterSongBySubCat(props.filteredSongs, 'Response', 'Celebration')
    const responseKingdom = filterSongBySubCat(props.filteredSongs, 'Response', 'Kingdom Come')
    const communionCross = filterSongBySubCat(props.filteredSongs, 'Communion', 'The Cross')
    const sendingMission = filterSongBySubCat(props.filteredSongs, 'Sending', 'Mission')


    return (
        <HorizontalScroll >
            <View style={styles.list}>
                <ListColumn title="Call to Worship">
                    <List title="Declaration and Praise" list={callToWorshipDeclaration} />
                    <List title="Drawing Near" list={callToWorshipDraw} />
                </ListColumn>
            </View>
            <View style={styles.list}>
                <ListColumn title="Revelation">
                    <List title="Name of Jesus" list={revelationName} />
                    <List title="Gospel Story" list={revelationStory} />
                    <List title="Sufficiency of Christ" list={revelationSufficiency} />
                    <List title="Adoption in Christ" list={revelationAdoption} />
                    <List title="Ascended Christ" list={revelationAscended} />
                    <List title="Assurance in Christ" list={revelationAssurance} />
                    <List title="Eternity" list={revelationEternity} />
                    <List title="Love of God" list={revelationLove} />
                    <List title="Goodness of God" list={revelationGoodness} />
                    <List title="Greatness of God" list={revelationGreatness} />
                    <List title="Faithfulness of God" list={revelationFaithfulness} />
                    <List title="Holiness of God" list={revelationHoliness} />
                    <List title="God in Suffering" list={revelationSuffering} />
                </ListColumn>
            </View>
            <View style={styles.list}>
                <ListColumn title="Response">
                    <List title="Adoration" list={responseAdoration} />
                    <List title="Reverence" list={responseReverence} />
                    <List title="Surrender" list={responseSurrender} />
                    <List title="Dependence" list={responseDependence} />
                    <List title="Celebration" list={responseCelebration} />
                    <List title="Kingdom Come" list={responseKingdom} />
                </ListColumn>
            </View>
            <View style={styles.list}>
                <ListColumn type="preach" />
                <ListColumn title="Communion">
                    <List title="The Cross" list={communionCross} />
                </ListColumn>
            </View>
            <View style={styles.list}>
                <ListColumn title="Sending">
                    <List title="Mission" list={sendingMission} />
                </ListColumn>
            </View>
        </HorizontalScroll>
    )
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
});

export default connect(state => { return state })(PrePreach);