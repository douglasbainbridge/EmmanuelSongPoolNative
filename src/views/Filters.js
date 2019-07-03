import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { filter, sort } from '../actions'
import Icon from '../components/Icon'

const FilterButton = ({ onPress, text, checked }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
            {checked !== undefined && <Icon style={styles.buttonText} size={30} icon="check box" checked={checked} />}
        </TouchableOpacity>
    )
}

function Filters(props) {
    return (
        <View style={styles.container}>
            <FilterButton
                onPress={() => props.filter('filterFocus')}
                text="Focus List"
                checked={props.filterFocus}
            />
            <FilterButton
                onPress={() => props.filter('filterNew')}
                text="New Songs"
                checked={props.filterNew}
            />
            <FilterButton
                onPress={() => props.sort('title')}
                text="Sort by title"
            />
            <FilterButton
                onPress={() => props.sort('femaleKey')}
                text="Sort by female key"
            />
            <FilterButton
                onPress={() => props.sort('maleKey')}
                text="Sort by male key"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030304',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
    },
    button: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    buttonText: {
        fontSize: 20,
        marginRight: 5,
        color: '#2886AE'
    },
});


export default connect(state => { return state }, { filter, sort })(Filters);