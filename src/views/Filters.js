import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { filter, sort } from '../actions'
import Icon from '../components/Icon'


class FilterButton extends Component {
    constructor() {
        super()
        this.state = { loading: false }
    }
    componentWillReceiveProps(props) {
        if (!props.loading) { this.setState({ loading: false }) }
    }
    render() {
        const { onPress, text, checked } = this.props
        const shouldCheck = this.state.loading ? !checked : checked
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ loading: true })
                    onPress()
                }
                }
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    {text}
                </Text>
                {checked !== undefined && <Icon style={styles.buttonText} size={30} icon="check box" checked={shouldCheck} />}
                {this.state.loading && <ActivityIndicator />}
            </TouchableOpacity>
        )
    }
}


function Filters(props) {
    return (
        <View style={styles.container}>
            <FilterButton
                onPress={() => props.filter('filterFocus')}
                text="Focus List"
                checked={props.filterFocus}
                loading={props.filterFocusLoading}
            />
            <FilterButton
                onPress={() => props.filter('filterNew')}
                text="New Songs"
                checked={props.filterNew}
            />
            <FilterButton
                onPress={() => props.sort('title')}
                text="Sort by title"
                checked={props.sortedBy === "title"}
                loading={props.sortedByLoading === "title"}
            />
            <FilterButton
                onPress={() => props.sort('femaleKey')}
                text="Sort by female key"
                checked={props.sortedBy === "femaleKey"}
            />
            <FilterButton
                onPress={() => props.sort('maleKey')}
                text="Sort by male key"
                checked={props.sortedBy === "maleKey"}
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