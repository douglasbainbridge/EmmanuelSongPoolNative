import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PostPreach from './views/PostPreach'


export default AppStack = createStackNavigator(
    {
        Screen1: {
            screen: PostPreach,
            navigationOptions: ({ navigation }) => ({
                headerRight: <TouchableOpacity
                    onPress={() => { navigation.navigate('Screen2') }}
                ><Text>Screen 2</Text>
                </TouchableOpacity>,
            }),
        },
        Screen2: PostPreach,
    },
    {
        initialRouteName: 'Play',

    }
);