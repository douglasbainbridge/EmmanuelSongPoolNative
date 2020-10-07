import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import PostPreach from './views/PostPreach'
import Home from './views/Home'
import Filters from './views/Filters'
import PrePreach from './views/PrePreach'
import FullList from './views/FullList'
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        shadowColor: 'transparent',
                        backgroundColor: '#030304',
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: { color: 'black' },
                    headerTintColor: 'white',

                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Filters') }}
                        ><Text style={{
                            color: 'white',
                            fontSize: 18
                        }}>Filter</Text></TouchableOpacity>
                    ),

                    headerRightContainerStyle: {
                        paddingRight: 30,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10,
                    },
                    headerBackTitleVisible: false
                })
                }
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="PostPreach"
                    component={PostPreach}
                />
                <Stack.Screen
                    name="PrePreach"
                    component={PrePreach}
                />
                <Stack.Screen
                    name="FullList"
                    component={FullList}
                />
                <Stack.Screen
                    name="Filters"
                    component={Filters}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: Home
//     },
//     PostPreach: PostPreach,
//     PrePreach: PrePreach,
//     FullList: FullList,
//     Filters: Filters
// },
//     {
//         initialRouteName: 'Home',
//         defaultNavigationOptions: ({ navigation }) => ({
//             headerStyle: {
//                 shadowColor: 'transparent',
//                 backgroundColor: '#030304',
//                 shadowRadius: 0,
//                 shadowOffset: {
//                     height: 0,
//                 },
//                 borderBottomWidth: 0,
//             },
//             headerTitleStyle: { color: 'white' },
//             headerTintColor: 'white',
//             headerRight: <TouchableOpacity
//                 onPress={() => { navigation.navigate('Filters') }}
//             ><Text style={{
//                 color: 'white',
//                 fontSize: 18
//             }}>Filter</Text></TouchableOpacity>,
//             headerRightContainerStyle: {
//                 paddingRight: 10,
//             },
//         }),
//     });

export default AppNavigator