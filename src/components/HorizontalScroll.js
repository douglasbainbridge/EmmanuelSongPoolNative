import React from 'react'
import Swiper from 'react-native-swiper';
import { Dimensions, ScrollView, View } from 'react-native'

export default function HorizontalScroll(props) {
    const { width } = Dimensions.get('window');
    if (width < 768 && props.children.length > 0) {
        return (

            <Swiper
                loop={false}
                dotColor={'white'}
                activeDotColor={'#2886AE'}
                bounces={true}
                containerStyle={{ backgroundColor: '#030304' }}
            >
                {props.children.map(child =>
                    <View key={child.key} style={{
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: '#030304',
                    }}>{child}</View>
                )}
            </Swiper>
        )
    }

    return (
        <ScrollView
            horizontal={true}
            bounces={false}
        >
            {props.children}
        </ScrollView>
    )
}
