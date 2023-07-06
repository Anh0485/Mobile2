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

function MovieDetail({route}): JSX.Element {
  const {
    movieName,
    movieImage,
    movieGenre,
    movieRelease,
    movieDescription,
    movieDirector,
    movieWriter,
    movieActor,
  } = route.params;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          source={{
            uri: movieImage,
          }}
          style={styles.movieImage}
        />
        <Text style={styles.movieScore}>MetaL 44</Text>
        <Text style={styles.movieScore}>imDB: 6.5 </Text>
      </View>
      <View style={[styles.container, {flex: 1}]}>
        <Text style={styles.movieTitle}>{movieName}</Text>
        <Text style={styles.movieDescription}>{'Genre: '} {movieGenre} </Text>
        <Text style={styles.movieDescription}>{'Released: '} {movieRelease}</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.movieDescription}>{movieDescription}</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.movieDescription}>{'Director: '} {movieDirector}</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.movieDescription}>{'Writer: '} {movieWriter}</Text>
        <View style={styles.lineStyle} />
        <Text style={styles.movieDescription}>{'Actor: '} {movieActor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 4,
    flexDirection: 'row',
    paddingVertical: 60,
  },
  container: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  movieImage: {
    width: 112,
    height: 200,
    resizeMode: 'cover',
  },
  movieScore:{
    fontSize:20,
  },
  movieTitle: {
    fontSize: 26,
    fontWeight: '400',
  },
  movieDescription: {
    fontSize: 14,
    fontWeight: '400',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'grey',
    margin: 10,
  },
});

export default MovieDetail;
