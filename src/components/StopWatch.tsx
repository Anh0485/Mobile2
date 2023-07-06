import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

// 0 - normarl
// 1 - running
// 2 - stop

const AppState = {
    NotRunning: 0,
    Running: 1,
    Stop: 2
}

function StopWatch(): JSX.Element {
    const [currentState, setCurrentState] = useState(AppState.NotRunning)
    const [listLap, setListLap] = useState<[number]>([])

    const [timeslap, setTimeslap] = useState<number>(0)
    const [startTime, setStartTime] = useState<number>(0)

    let intervalId = useRef(null)

    useEffect(() => {
       if (currentState === AppState.Running) {
        intervalId.current = setInterval(() => {

            const newTime = new Date().getTime() // milisecond
            console.log(newTime);
            console.log(currentState + "start time " + startTime + " new time" + newTime)
            setTimeslap(newTime - startTime)
        },
        100
        )
       } else {
        clearInterval(intervalId.current)
       }
      }, [startTime, currentState]);

    const getFirstButtonTitle = () => {
        if (currentState === AppState.NotRunning) {
            return "Start"
        } else if (currentState === AppState.Running) {
            return "Stop"
        } else if (currentState === AppState.Stop) {
            
            return "Reset"
        }
    }

    const isDisableLap = () => {
        return currentState !== AppState.Running
    }

    const handleFirstButtonPress = () => {
        if (currentState === AppState.NotRunning) {
            setStartTime(new Date().getTime())
        } else if (currentState === AppState.Stop) {
            setListLap([])
            setTimeslap(0)
            setStartTime(0)
        } 
        setCurrentState(currentState === AppState.Stop ? 0 : currentState + 1)
    }

    const handleLapButtonPress = () => {
        listLap.push(timeslap)
        setListLap(listLap)
    }
    
    const msToTime = (s: number) => {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        
        let time = hrs > 9 ? `${hrs}:` : `0${hrs}:`
        time += mins > 9 ? `${mins}:` : `0${mins}:`
        time += secs > 9 ? `${secs}` : `0${secs}`
      
        return time + '.' + ms;
      }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.timerText}>{msToTime(timeslap)}</Text>
            </View>
            <View style={styles.center}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[styles.button, { marginRight: 50 }]}
                        onPress={handleFirstButtonPress}>
                        <Text>{getFirstButtonTitle()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        disabled={isDisableLap()}
                        onPress={handleLapButtonPress}>
                        <Text>Lap</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.bottom}>
                {
                    listLap.map((item, index) => {
                        return (
                            <View key={index} style={styles.lapView}>
                                <Text style={styles.lapText}>Lap #{index + 1}</Text>
                                <Text style={styles.lapText}>{msToTime(item)}</Text>
                            </View>
                        )
                    }).reverse()
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        alignItems: 'center',
        paddingVertical: 100,
    },
    center: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottom: {
        paddingHorizontal: 40,
        marginTop: 20,
        flex: 1
    },
    timerText: {
        fontSize: 60
    },
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50
    },
    lapView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
        marginBottom: 10
    },
    lapText: {
        fontSize: 25
    }
});

export default StopWatch;