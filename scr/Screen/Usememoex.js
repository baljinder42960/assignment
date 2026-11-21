import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(0);

    const result = useMemo(() => {
        console.log("Calculation");
        return number * number;
    }, [number]);

    return (
        <View style={{ margin: 50 }}>
            <Text>Number: {number}</Text>
            <Text>Result: {result}</Text>

            <Button title="Change Number" onPress={() => setNumber(number + 1)} />

            <Text>Count: {count}</Text>
            <Button title="Increase Count" onPress={() => setCount(count + 1)} />
        </View>
    );
}