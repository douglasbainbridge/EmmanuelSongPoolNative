import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from '../img/LogoWhite.png'

const MenuButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


export default function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Welcome to the Song Pool.</Text>
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.text}>Where in the service is most of your worship time?</Text>

                <MenuButton
                    title="mostly before the preach"
                    onPress={() => props.navigation.navigate('PrePreach')}
                />

                <MenuButton
                    title="mostly after the preach"
                    onPress={() => props.navigation.navigate('PostPreach')}
                />



                <MenuButton
                    title="view full list"
                    onPress={() => props.navigation.navigate('FullList')}
                />
            </View>
            <View>
                <Image
                    style={{ width: 40, height: 40, resizeMode: 'contain' }}
                    source={Logo}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030304',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 1
    },
    menuContainer: {
        flex: 3,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        marginBottom: 12,
        fontSize: 16
    },
    header: {
        color: 'white',
        fontSize: 30
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
