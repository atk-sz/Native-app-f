import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/Header';
import ItemScreen from '../screens/ItemScreen';

const ScreenStack = createStackNavigator()

const HomeScreens = () => {
    return (
        <ScreenStack.Navigator initialRouteName="Home"
            screenOptions={{
                header: (Props) => <Header {...Props} />
            }
            }>
            <ScreenStack.Screen options={{
                title:"Znews feed"
            }}
            name="Home" component={HomeScreen} />
            <ScreenStack.Screen options={{
                title:"Category feed"
            }}
            name="Category" component={CategoryScreen} />
            <ScreenStack.Screen 
            name="Item" component={ItemScreen} />
        </ScreenStack.Navigator>
    )
}

export default HomeScreens;