import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput } from 'react-native';
import { search } from '../actions'


class Search extends Component {
    componentDidMount() {
        this.props.search('')
    }
    componentWillUnmount() {
        this.props.search('')
    }
    render() {
        return (
            <TextInput
                placeholder="search..."
                onChangeText={(e) => {
                    this.props.search(e)
                }}
                autoFocus
                style={{
                    height: 40,
                    width: 220,
                    padding: 8,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderRadius: 10
                }}
            />
        )
    }
}
export default connect(state => { return state }, { search })(Search);