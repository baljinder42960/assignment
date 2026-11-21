import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'
import { useState,useEffect,useRef } from 'react'

const UseRefEx = () => {
    //   const  inputRef = useRef(null);
    //   const handleFocus = () => {
    //     inputRef.current.focus();
    //   };

    //   return (
    //     <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:500}}>
    //       <Text>index</Text>
    //         <TextInput ref={inputRef} placeholder="Enter text" />
    //         <Button title="Focus Input" onPress={handleFocus} />
    //     </View>
    //   )
    // }



    const [count, setCount] = useState(0);
    const prevCount = useRef();
    useEffect(() => {
        prevCount.current = count;
    }, [count]);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

            <Text>{count}</Text>
            <Text>prev:{prevCount.current}</Text>
            <Button title="click" onPress={()=>setCount(count+1)} />
            <Text>ufufujfujf</Text>

        </View>
    )
}
export default UseRefEx

const styles = StyleSheet.create({})