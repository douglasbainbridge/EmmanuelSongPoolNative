import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import Router from './Router'

function LoadingSwitch(props) {
    if (props.loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return <Router />
}


const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


export default connect(state => { return state })(LoadingSwitch);