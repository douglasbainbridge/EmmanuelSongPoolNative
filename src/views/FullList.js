import React from 'react'
import ListColumn from '../components/ListColumn';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import Search from '../components/Search'

function FullList(props) {
    return (
        <View style={styles.list}>
            <Search />
            <ListColumn
                title="Full List"
                lists={[{ data: props.filteredSongs }]}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030304',
    }
});

export default connect(state => { return state })(FullList);