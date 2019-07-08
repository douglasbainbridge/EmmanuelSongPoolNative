import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from './Icon'

export default function ListColumn(props) {
    if (props.type === "preach") {
        return (
            <View style={styles.list}>
                <Text style={styles.title}>Preach</Text>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}><Icon color='white' icon="arrow" direction="left" /><Text style={{ color: 'white', fontSize: 20 }}>before the preach</Text></View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', textAlign: 'right' }}><Text style={{ color: 'white', fontSize: 20 }}>after the preach </Text><Icon color='white' icon="arrow" direction="right" /></View>
                </View>

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
        flex: 1,
        backgroundColor: '#030304',
        paddingTop: 20,
        paddingBottom: 60,
        paddingHorizontal: 10,
        maxWidth: 320,
        minWidth: 280
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
});
