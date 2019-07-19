import React from 'react'
import List from '../components/List'
import filterSongBySubCat from '../config/filterSongBySubCat'
import ListColumn from '../components/ListColumn';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import HorizontalScroll from '../components/HorizontalScroll';

function PostPreach(props) {
    const columns = [
        {
            title: 'Call to Worship',
            lists: [
                { title: "Declaration & Praise" },
                { title: "Drawing Near" }
            ]
        },
        {
            title: 'Revelation',
            lists: [
                { title: "Name of Jesus" },
                { title: "Gospel Story" },
                { title: "Sufficiency of Christ" },
                { title: "Adoption in Christ" },
                { title: "Ascended Christ" },
                { title: "Assurance in Christ" },
                { title: "Eternity" },
                { title: "Love of God" },
                { title: "Goodness of God" },
                { title: "Greatness of God" },
                { title: "Faithfulness of God" },
                { title: "Holiness of God" },
                { title: "God in Suffering" },
            ]
        },
        {
            title: 'Response',
            lists: [
                { title: "Adoration" },
                { title: "Reverence & Awe" },
                { title: "Surrender" },
                { title: "Dependence" },
                { title: "Celebration" },
                { title: "Kingdom Come" },
            ]
        },
        {
            title: 'preach'
        },
        {
            title: 'Communion',
            lists: [
                { title: "The Cross" },
            ]
        },
        {
            title: 'Sending',
            lists: [
                { title: "Mission" },
            ]
        }
    ]
    return (
        <HorizontalScroll>
            {columns.map(c =>
                <View key={c.title} style={styles.list}>
                    <ListColumn
                        title={c.title}
                        type={c.type}
                    >
                        {c.lists && (
                            <FlatList
                                keyExtractor={item => item.title}
                                data={c.lists}
                                renderItem={i => <List title={i.item.title} list={filterSongBySubCat(props.filteredSongs, c.category ? c.category : c.title, i.item.title)} />}
                                initialNumToRender={c.lists.length}
                            />
                        )}

                    </ListColumn>
                </View>
            )}
        </HorizontalScroll>
    )
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
});

export default connect(state => { return state })(PostPreach);