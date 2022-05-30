import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.image}
          >
          <View style={styles.cardInner}>
            <Text style={styles.name}>Soumya Hazra</Text>
            <Text style={styles.bio}>A dude with rocket is looking for a gal with fuel</Text>
          </View>
        </ImageBackground>
      </View>
    </View>  
  );
};

const styles = StyleSheet.create({
  pageContainer: { 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  card : {  
      width: '95%',
      height: '70%',
      borderRadius: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
   

  },
  name : {
    fontSize : 30,
    fontWeight: 'bold',

    
  },
  bio : {
    fontSize : 20,    
    


  },
  cardInner: {
    padding: 10,
    marginHorizontal : 5,
  },

})

export default App;