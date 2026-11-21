import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = ({navigation}) => {
    // const navigation=useNavigation()
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='click to go'  onPress={()=>navigation.navigate("about")}/>

<TouchableOpacity onPress={()=>navigation.navigate("about")}>
    <View style={{height:100,width:100,backgroundColor:"blue"}}>

    </View>
</TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})