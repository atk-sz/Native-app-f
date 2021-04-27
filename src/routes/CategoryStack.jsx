import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Header from '../components/Header';
import CategoriesScreen from '../screens/CategoriesScreen';

const ScreenStack = createStackNavigator()

const CategoryScreens = () => {
    return (
        <ScreenStack.Navigator initialRouteName="Categories" screenOptions={{
                header: (Props) => <Header {...Props} />
        }}>
            <ScreenStack.Screen options={{
                title:"All Categories"
            }}
            name="Categories" component={CategoriesScreen} />
        </ScreenStack.Navigator>
    )
}

export default CategoryScreens;