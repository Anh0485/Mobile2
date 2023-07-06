/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';

import BMI from './src/components/BMI.js'
import Timer from './src/components/Timer.js';
// import StopWatch from './src/components/StopWatch.tsx';
// import StockApp from './src/components/StockApp.tsx';
// import MovieScreen from './src/components/BTVN/MovieScreen.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieListing from './src/components/Movies/MovieListing.tsx'
import MovieDetail from './src/components/Movies/MovieDetail.tsx'; 

const screenStack = createNativeStackNavigator();


function App(): JSX.Element {

  return (

    // <BMI />
    // <Timer/>
    // <StopWatch />
    // <StockApp />
    // <MovieScreen />
    <NavigationContainer>
      <screenStack.Navigator>
        <screenStack.Screen
          name="Movie"
          component={MovieListing}
          options={{
            title: "Movie Explorer",
            headerStyle: {
              backgroundColor: '#F35120',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold'
            },

          }}
        />
        <screenStack.Screen
          name="Movie Detail"
          component={MovieDetail}
          options={{
            title: "Movie Detail",
            headerStyle: {
              backgroundColor: '#F35120',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold'
            },
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }} />
      </screenStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   outer: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   inner: {
//     flex: 1,
//     backgroundColor: 'gray',
//     flexDirection: 'row',

//   },
//   box: {
//     height: 50,
//     width: 50,
//     backgroundColor: 'red'
//   }

// })
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  container: {
    paddingHorizontal: 4,
    justifyContent: 'flex-start',
    paddingVertical: 4,
  },
  movieImage: {
    width: 74,
    height: 102,
    resizeMode: 'cover',
  },
  movieTitle: {
    fontSize: 20,
  },
});


export default App;
