import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Danh sách các phim
const movies = [
  {
    id: 1,
    title: 'Batman Begins (2005)',
    description:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
    image: require('./images/batman_begins.jpg'),
  },
  {
    id: 2,
    title: 'Batman v Superman: Dawn of Justice (2016)',
    description:
      'Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.',
    image: require('./images/batman_vs_superman.jpg'),
  },
  {
    id: 3,
    title: 'Batman (1989)',
    description:
      'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
    image: require('./images/batman_1989.jpg'),
  },
  {
    id: 4,
    title: 'Batman Returns (1992)',
    description:
      'Batman returns to Gotham City to face a new threat from a ruthless businessman and a mysterious woman with a deadly secret.',
    image: require('./images/batman_returns.jpg'),
  },
  {
    id: 5,
    title: 'Batman Forever (1995)',
    description:
      'Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler, with help from an amorous psychologist and a young circus acrobat.',
    image: require('./images/batman_forever.jpg'),
  },
  {
    id: 6,
    title: 'Batman & Robin (1997)',
    description:
      'Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.',
    image: require('./images/batman_robin.jpg'),
  },
  {
    id: 7,
    title: 'The Lego Batman Movie',
    description:
      'A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.',
    image: require('./images/lego_batman.jpg'),
  },
];

const Stack = createStackNavigator();

const MovieListScreen = ({ navigation }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Hiển thị thông tin chi tiết phim
  const showMovieDetails = (movie) => {
    setSelectedMovie(movie);
    navigation.navigate('MovieDetail');
  };

  // Hiển thị một mục trong danh sách phim
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => showMovieDetails(item)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'20px', marginBottom:'20px' }}>
        <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Danh sách phim:</Text>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Movie Detail</Text>
      <Text>{movie.title}</Text>
      <Image source={movie.image} style={{ width: 200, height: 200, marginTop: 10 }} />
      <Text>Description: {movie.description}</Text>
    </View>
  );
};

const MovieScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MovieList" component={MovieListScreen} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MovieScreen;
