import {Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
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


    const addTask = () => {
        const newTask = {id: tasks.length + 1, title: value, isDone: false}
        //Alert.alert(JSON.stringify(newTask))
        setTasks([newTask, ...tasks])
        setValue('')
    }

    const changeStatus = (taskId: number, status: boolean) => {
        setTasks(tasks.map((t) => t.id === taskId ? {...t, isDone: status} : t))
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input]}
                value={value}
                onChangeText={setValue}
                placeholder="Введите текст"
            />
            <View style={{marginBottom: 20}}>
                <Button title={'Add task'} onPress={addTask} />
            </View>


            <View style={{width: '60%'}}>
                {tasks.map((t) => {
                    return <View key={t.id} style={[styles.boxTask, globalStyles.border]}>
                        <Checkbox value={t.isDone} onValueChange={(value)=>changeStatus(t.id, value)} />
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