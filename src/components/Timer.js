import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const AppState = {
  NotRunning: 'NotRunning',
  Running: 'Running',
  Paused: 'Paused',
  Stop: 'Stop'
}

const Timer = () => {

  // const [isRunning, setIsRunning] = useState(false);
  // const [elapsedTime, setElapsedTime] = useState(0);


  const [currentState, setCurrentState] = useState(AppState.NotRunning)
  const [listLap, setListLap] = useState([])

  const [timeslap, setTimeslap] = useState(0)
  const [startTime, setStartTime] = useState(0)

  useEffect(() => {
    let interval = null;

    if (currentState === AppState.Running) {
      interval = setInterval(() => {
        setTimeslap(Date.now() - startTime);
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [currentState, startTime])

  const startStopwatch = () => {
    if (currentState !== AppState.Running) {
      setStartTime(Date.now() - timeslap);
    }
    setCurrentState(AppState.Running);
  };

  const pauseStopwatch = () => {
    setCurrentState(AppState.Paused);
  };

  const resumeStopwatch = () => {
    setCurrentState(AppState.Running);
  };

  const stopStopwatch = () => {
    setCurrentState(AppState.NotRunning);
    setTimeslap(0);
    setListLap([]);
  };

  const lapStopwatch = () => {
    const lapTime = Date.now() - startTime;
    setListLap((prevList) => [...prevList, lapTime]);
  };

  const resetStopwatch = () => {
    setTimeslap(0);
    setListLap([]);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  const handleFirstButtonPress = () => {
    console.log(currentState);

    if (currentState === AppState.NotRunning) {
      const newStartTime = new Date().getTime();
      setStartTime(newStartTime);

      const interval = setInterval(() => {
        const newTime = new Date().getTime();
        setTimeslap(newTime - newStartTime);
      }, 10);

      setCurrentState(AppState.Running);

      // Clear the interval when the stopwatch is stopped or paused
      return () => clearInterval(interval);
    } else if (currentState === AppState.Stop) {
      setListLap([]);
      setTimeslap(0);
      setStartTime(0);
    }

    setCurrentState(currentState === AppState.Stop ? 0 : currentState + 1);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeslap)}</Text>
      <View style={styles.buttonContainer}>
        {
          currentState === AppState.NotRunning
            ? (<TouchableOpacity style={styles.button} onPress={handleFirstButtonPress}>
              <Text style={styles.textButton}>Start</Text>
            </TouchableOpacity>)
            : (
              <TouchableOpacity style={styles.button} onPress={pauseStopwatch}>
                <Text style={styles.textButton}>Stop</Text>
              </TouchableOpacity>
              // <>
              //   <TouchableOpacity style={styles.button} onPress={pauseStopwatch}>
              //     <Text style={styles.buttonText}>Pause</Text>
              //   </TouchableOpacity>
              //   <TouchableOpacity style={styles.button} onPress={lapStopwatch}>
              //     <Text style={styles.buttonText}>Lap</Text>
              //   </TouchableOpacity>
              //   <TouchableOpacity style={styles.button} onPress={stopStopwatch}>
              //     <Text style={styles.buttonText}>Stop</Text>
              //   </TouchableOpacity>
              // </>
            )
          // )
          //   ()
        }
        {currentState === AppState.Paused && (
          <TouchableOpacity style={styles.button} onPress={resumeStopwatch}>
            <Text style={styles.buttonText}>Resume</Text>
          </TouchableOpacity>
        )}

      </View>
      <View style={styles.lapsContainer}>
        {listLap.map((lapTime, index) => (
          <Text key={index} style={styles.lapText}>
            Lap {index + 1}: {formatTime(lapTime)}
          </Text>
        ))}
      </View>
      {currentState !== AppState.NotRunning && (
        <TouchableOpacity style={styles.resetButton} onPress={resetStopwatch}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 150,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
    backgroundColor: '#ccc',

  },
  textButton: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: 18,
  },
  lapsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lapText: {
    fontSize: 18,
    marginBottom: 5,
  },
  resetButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Timer;
