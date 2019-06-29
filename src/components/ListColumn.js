import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function ListColumn(props) {
    if (props.type === "preach") {
        return (
            <View>
                <Text>Preach</Text>
            </View>
        )
    }
    return (
        <View style={styles.list}>
            {props.title && <Text>{props.title}</Text>}
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
        backgroundColor: 'red',
        padding: 20
    }
});
