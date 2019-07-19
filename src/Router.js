import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';
import PostPreach from './views/PostPreach'
import Home from './views/Home'
import Filters from './views/Filters'
import PrePreach from './views/PrePreach'
import FullList from './views/FullList'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    PostPreach: PostPreach,
    PrePreach: PrePreach,
    FullList: FullList,
    Filters: Filters
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                shadowColor: 'transparent',
                backgroundColor: '#030304',
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
                borderBottomWidth: 0,
            },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
            headerRight: <TouchableOpacity
                onPress={() => { navigation.navigate('Filters') }}
            ><Text style={{
                color: 'white',
                fontSize: 18
            }}>Filter</Text></TouchableOpacity>,
            headerRightContainerStyle: {
                paddingRight: 10,
            },
        }),
    });

export default createAppContainer(AppNavigator)