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
import Home from 'pages/home';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';

import Settings from 'pages/settings';
import Quiz from 'pages/quiz';
import Quest from 'pages/quest';


const Stack = StackNavigator({
  Home: { screen: Home },
  Page1: { screen: Page1 },
  Settings: { screen: Settings },
  Quiz: { screen: Quiz },
  Quest: { screen: Quest },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: props => <Header {...props} defaultTitle="Quizes" />,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
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
