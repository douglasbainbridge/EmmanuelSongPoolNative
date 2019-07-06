import React from 'react'
import PropTypes from 'prop-types';
import Song from './Song'
import { StyleSheet, Text, View } from 'react-native';

function List({ list, title }) {
    return (
        <View style={styles.list}>
            {title && <Text style={styles.title}>{title}</Text>}
            {list.map(s => <Song key={s.id} song={s} />)}
        </View>
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        minHeight: 80,
        borderColor: '#2886AE',
        borderWidth: 6,
        borderStyle: 'solid'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6
    }
});


export default List