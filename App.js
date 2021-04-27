import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreens from './src/routes/HomeStack';
import CategoryScreens from './src/routes/CategoryStack';
import { Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreens} />
          <Drawer.Screen name="Categories" component={CategoryScreens} />
        </Drawer.Navigator>
      </NavigationContainer>
      <FlashMessage style={{ marginTop:25}} position="top" />
    </View>
  );
}

export default App;
