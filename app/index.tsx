import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from 'react';

export default function Index() {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Введите текст"
            />
            <Text style={styles.text}>Вы ввели: {value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4bea13",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color: 'black'
    }
});