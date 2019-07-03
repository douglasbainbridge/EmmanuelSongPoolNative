import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function ListColumn(props) {
    if (props.type === "preach") {
        return (
            <View style={styles.list}>
                <Text style={styles.title}>Preach</Text>
            </View>
        )
    }
    return (
        <View style={styles.list}>
            {props.title && <Text style={styles.title}>{props.title}</Text>}
            <ScrollView >
                {props.children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        flex: 1,
        backgroundColor: '#030304',
        paddingTop: 20,
        paddingBottom: 60,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
});
