// import React, { useContext } from 'react'
// import UserContext from '../context/userContext'

// const UserScreen = () => {
//     // const name=useContext(UserContext)
//   return (
//     <View>
//         <Text>this is the data shared by context </Text>
//       {/* <h1>{name}</h1> */}
//     </View>
//   )
// }

// export default UserScreen



import React, { useContext } from 'react'
import UserContext from '../context/userContext' 
import { View ,Text,Button} from 'react-native'
const UserScreen = () => {
  const {user,showName,showAge}=useContext(UserContext)
  return (
    <View>
      <Text>hello user </Text>
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>
      <button onClick={showName}> click</button>
      <button onClick={showAge}> click</button>
      
    </View>
  )
}

export default UserScreen