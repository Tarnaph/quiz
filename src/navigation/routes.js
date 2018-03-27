/* React */
import React from 'react';
import { Animated, Easing } from 'react-native';

/* Navigation */
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

/* Components */
import Footer from 'navigation/components/footer';
import Header from 'navigation/components/header';
import Bugger from 'navigation/components/bugger';

/* Pages */
import Settings from 'pages/settings';
import Home from 'pages/quiz';
import Quest from 'pages/quest';
import Result from 'pages/result';


const Stack = StackNavigator({
  Settings: { screen: Settings },
  Home: { screen: Home },
  Quest: { screen: Quest },
  Result: { screen: Result },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: props => <Header {...props} defaultTitle="Quizes" />,
  },
  // transitionConfig: () => ({
  //   transitionSpec: {
  //     duration: 0,
  //     timing: Animated.timing,
  //     easing: Easing.step0,
  //   },
  // }),
});

const Drawer = DrawerNavigator({
  Home: {
    screen: Stack,
  },
}, {
  contentComponent: props => <Bugger {...props} />,
  drawerWidth: 250,
});


// const Tab = TabNavigator({
//   Home: { screen: Drawer },
//   Page2: { screen: Page2 },
// }, {
//   swipeEnabled: false,
//   animationEnabled: false,
//   lazy: false,
//   tabBarPosition: 'bottom',
//   tabBarComponent: props => <Footer {...props} />,
// });

export default Drawer;
