import { createStackNavigator, createAppContainer } from 'react-navigation';
import PostPreach from './views/PostPreach'


const AppNavigator = createStackNavigator({
    Home: {
        screen: PostPreach
    }
});

export default createAppContainer(AppNavigator);