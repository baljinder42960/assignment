import React from 'react'
import useCounter from '../hooks/useCounter'
import { View,Text,Button } from 'react-native'
const CounterScreen = () => {
    const {count,increament,decreament,reset}=useCounter()
  return (
    <View>
      <Text>this is sscreen for counter </Text>
      <Text>{count}</Text>


<button onClick={increament}>ince</button>
<button onClick={decreament}>decr</button>
<button onClick={reset}>reset</button>

</View>
  )
}

export default CounterScreen