import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux'
import Router from './Router'


const InitialLoad = (props) => {
    if (props.initialLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    if (!props.initialLoading && props.error) {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>{props.error}</Text>
                </View>

            </View>
        )
    }
    return <Router />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030304'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        minHeight: 200,
        borderColor: '#EDC331',
        borderWidth: 3,
        borderStyle: 'solid'
    }
});


export default connect(state => { return state })(InitialLoad);