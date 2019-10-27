import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput } from 'react-native';
import { search } from '../actions'
import { View } from 'react-native-animatable';


class Search extends Component {
    componentDidMount() {
        this.props.search('')
    }
    componentWillUnmount() {
        this.props.search('')
    }
    render() {
        return (
            <View
                style={{
                    width: '100%',
                    paddingHorizontal: 20,
                    maxWidth: 420,
                }}
            >
                <TextInput
                    placeholder="search..."
                    clearButtonMode="always"
                    returnKeyType="go"
                    onChangeText={(e) => {
                        this.props.search(e)
                    }}
                    autoFocus
                    style={{
                        height: 40,
                        width: '100%',
                        padding: 8,
                        borderWidth: 1,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}
                />
            </View>
        )
    }
}
export default connect(state => { return state }, { search })(Search);