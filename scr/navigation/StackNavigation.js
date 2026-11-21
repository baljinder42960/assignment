// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeScreen from '../screens/HomeScreen'
// import AboutScreen from '../screens/AboutScreen'

// const Stack=createNativeStackNavigator()
// const StackNavigation = () => {

//   return (
//    <NavigationContainer>
//     <Stack.Navigator screenOptions={{headerShown:false}}>
//         <Stack.Screen name='home' component={HomeScreen}/>
//         <Stack.Screen name='about' component={AboutScreen}/>
//     </Stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default StackNavigation

// const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import LoginScreen from '../auth/LoginScreen'
import TabNavigation from './TabNavigation'

const Stack=createNativeStackNavigator()
const StackNavigation = () => {

  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Tab'>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='Tab' component={TabNavigation}/>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='about' component={AboutScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})