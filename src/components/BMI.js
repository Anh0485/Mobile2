import React from 'react';
import { useState } from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View, Button, Touchable, TouchableOpacity, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView
} from 'react-native';
const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('0.00');
    const [resultText, setResultText] = useState('')

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = parseInt(height) / 100;
            const bmiValue = parseInt(weight) / (heightInMeters * heightInMeters);
            setBMI(bmiValue.toFixed(2));
            if (setBMI(bmiValue.toFixed(2)) > 18.5) {
                setResultText('Thiếu cân');
            } else if (setBMI(bmiValue.toFixed(2)) >= 18.5 && setBMI(bmiValue.toFixed(2)) <= 24.9) {
                setResultText('cân nặng khỏe mạnh');
            } else if (setBMI(bmiValue.toFixed(2)) >= 25 && setBMI(bmiValue.toFixed(2)) <= 29.9) {
                setResultText('thừa cân');
            } else if (setBMI(bmiValue.toFixed(2)) > 30) {
                setResultText('béo phì')
            }
        }
    }


    return (
        // bài 1. keyboard không che input
        // Bài 2. chỉ số bao nhiêu gầy, bao nhiều mập, nếu chỉ số bao nhiêu thì mập, gầy, yếu
        // <KeyboardAvoidingView
        //     behavior='padding'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.text}>Weight (KG)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='0'
                        value={weight}
                        onChangeText={setWeight}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.group}>
                    <Text style={styles.text}>Height (CM)</Text>
                    <TextInput
                        value={height}
                        onChangeText={setHeight}
                        style={styles.input}
                        placeholder='0'
                        keyboardType='numeric'
                    />
                </View>
                <Text style={styles.result}>BMI: {bmi}</Text>
                <Text>Kết quả: {resultText}</Text>
                <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                    <Text style={styles.buttonTitle}>Compute</Text>
                </TouchableOpacity>

            </View >
        </TouchableWithoutFeedback>
        // </KeyboardAvoidingView >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 16,
    },
    group: {
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginBottom: 8
    },
    label: {
        color: 'black',
        fontSize: 16,
        justifyContent: 'center',
        marginBottom: 15
    },
    button: {
        backgroundColor: 'rgb(172,216,230)',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 15,

    },
    buttonTitle: {
        fontSize: 30,
        fontWeight: '300',
        color: 'black'
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        alignSelf: 'center'
    },
})

export default BMI