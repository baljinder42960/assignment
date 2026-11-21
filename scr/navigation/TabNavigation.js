import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigation} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen'
import AboutScrren from '../Screen/AboutScreen'



const  Tab=createBottomTabNavigation()

const TabNavigation = () => {
  return (
   <Tab.Navigation ScreenOptions={{headerShow:false}}>

<Tab.Screen name='home' component={HomeScreen}/>
<Tab.Screen name='About' component={AboutScrren}/>
</Tab.Navigation>

  )
}

export default TabNavigation

const styles = StyleSheet.create({})