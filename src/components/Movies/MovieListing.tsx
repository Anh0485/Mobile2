/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { movieData } from './movieData.js';

export default function MovieListing({navigation}): JSX.Element { 
  return (
    <SafeAreaView style={styles.root}>
      <FlatList 
      keyExtractor={(item) => item.id}
      data = {movieData}
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("Movie Detail", {
            movieName: item.name,
            movieImage: item.imgurl,
            movieGenre: item.genre,
            movieRelease: item.released,
            movieDescription: item.description,
            movieWriter: item.writer,
            movieActor: item.actor,
            movieDirector: item.director,

          })}
          >
        <View style={[styles.container, {flexDirection:'row'}]}>
        <View style={styles.container}>
          <Image  source={{ uri: item.imgurl }}
         style={styles.movieImage} />
        </View>
        <View style={[styles.container, {flex:1}]}>
         <Text style={[styles.movieTitle, ]}> 
          {item.name}
         </Text>
        </View>
        <View style={[styles.container, {justifyContent:'center'}]}>
         {/* <Image 
         source={require('../img/arrow.png')}
         style={[{height:24, width:24}]}/> */}
        </View>
        </View>
        </TouchableOpacity>
      )}
      />

      </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  root: {
    flex:1,
    marginTop:4,
  },
  container:{
    paddingHorizontal:4,
    justifyContent:'flex-start',
    paddingVertical:4,
  },
  movieImage: {
    width: 74,
    height: 102,
    resizeMode: 'cover',
  },
  movieTitle:{
    fontSize:20,
  },
});

