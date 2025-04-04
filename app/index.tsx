import { Text, View, StyleSheet, TextInput } from "react-native";
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function Index() {
    const [value, setValue] = useState('');

    const [tasks, setTasks] = useState([
        {id:1, title: 'HTML', isDone: true},
        {id:2, title: 'CSS', isDone: true},
        {id:3, title: 'JS', isDone: false},
        {id:4, title: 'React', isDone: true},
        {id:5, title: 'React native', isDone: false}
    ])

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input]}
                value={value}
                onChangeText={setValue}
                placeholder="Введите текст"
            />
            <Text style={styles.text}>Вы ввели: {value}</Text>
            <View style={{width: '60%'}}>
                {tasks.map((t) => {
                    return <View key={t.id} style={[styles.boxTask, globalStyles.border]}>
                        <Checkbox value={t.isDone} onValueChange={()=>{}} />
                        <Text>{t.title}</Text>
                    </View>
                })}
            </View>
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
        width: '60%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color: 'black'
    },
    boxTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#b4d5ff',
        padding: 5,
    }
});


const globalStyles = StyleSheet.create({
    border: {
       borderStyle: 'solid',
       borderWidth: 1,
       borderColor: 'gray',
        borderRadius: 5
    }
})