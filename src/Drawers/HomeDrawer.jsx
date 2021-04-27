import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation'
import CategoryScreens from '../routes/CategoryStack';
import HomeScreens from '../routes/HomeStack';


const RootNavigation = createDrawerNavigator(
  {
    Home:{
      screen: HomeScreens,
    },
    Category:{
      screen: CategoryScreens
    }
  }
)

export default createAppContainer(RootNavigation)




















// function HomeDrawer({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsDrawer({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App1() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="HomeDraw" component={HomeDrawer} />
//         <Drawer.Screen name="Notifications" component={NotificationsDrawer} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }





