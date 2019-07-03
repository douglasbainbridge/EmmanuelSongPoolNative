import React from 'react'
import List from '../components/List'
import ListColumn from '../components/ListColumn';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

function FullList(props) {
    return (
        <View style={styles.list}>
            <ListColumn >
                <List list={props.filteredSongs} />
            </ListColumn>
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
});

export default connect(state => { return state })(FullList);