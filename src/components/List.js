import React from 'react'
import PropTypes from 'prop-types';
import Song from './Song'
import { StyleSheet, Text, View } from 'react-native';

function List({ list, title }) {
    return (
        <View style={styles.list}>
            {title && <Text>{title}</Text>}
            {list.map(s => <Song key={s.title + s.artist} song={s} />)}
        </View>
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'blue',
        marginBottom: 20
    }
});


export default List