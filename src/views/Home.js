import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome to the Song Pool.</Text>
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.text}>Where in the service is most of your worship time?</Text>
                <Button
                    title="mostly after the preach"
                    color="#2886AE"
                    onPress={() => props.navigation.navigate('PostPreach')}
                />

                <Button
                    title="mostly before the preach"
                    color="#2886AE"
                    onPress={() => props.navigation.navigate('PrePreach')}
                />

                <Button
                    title="view full view"
                    color="#2886AE"
                    onPress={() => props.navigation.navigate('FullList')}
                />
            </View>
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
    headerContainer: {
        flex: 1
    },
    menuContainer: {
        flex: 3
    },
    text: {
        color: 'white'
    },
    header: {
        color: 'white',
        fontSize: 30
    },
    menuButton: {
        backgroundColor: 'white'
    }
});
