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
                    <Text style={{ color: 'white', marginBottom: 16, fontSize: 20 }}><Icon color='white' icon="arrow" direction="left" /> before the preach</Text>
                    <Text style={{ color: 'white', fontSize: 20, width: '100%', flexDirection: 'row', textAlign: 'right' }}>after the preach <Icon color='white' icon="arrow" direction="right" /> </Text>
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
        width: '100%',
        flex: 1,
        backgroundColor: '#030304',
        paddingTop: 20,
        paddingBottom: 60,
        paddingHorizontal: 10,
        maxWidth: 320
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
});
