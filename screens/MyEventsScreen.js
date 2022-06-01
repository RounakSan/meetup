import { StyleSheet, SafeAreaView, View, Text, Image} from 'react-native'; 
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import colors from '../components/themes/colors';

export default function MyEventsScreen() {
  return (
      <SafeAreaView>
      <View>
      {/* Header */}
            <View style={styles.header}>
              <EvilIcons
                      name={'navicon'}
                      size={28}
                      color={colors.black}
                />
              <Text style={styles.headerText}>Events</Text>
              <AntDesign
                      name={'setting'}
                      size={28}
                      color={colors.black}
                      style={styles.settingIcon}
                />
            </View>
            
      {/* Image Container */}
            <View style={styles.imageContainer}>
              <View style={styles.ContentContainer}>
                <Image 
                source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
                style={styles.image}
                />
              </View>
            </View>
      </View>
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

  header:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
      },

  headerText:{
    marginLeft:'auto',
    fontSize: 20,
    fontWeight: '400',
  },
  settingIcon:{
    marginLeft:'auto',
  },
  imageContainer:{
    padding:10,
  },
  image:{
    width:'100%',
    aspectRatio:1,
    borderRadius: '20 20'
  },
  ContentContainer:{
    width:'100%',
    height:'95%',
    backgroundColor:colors.lightyellow,
    borderRadius: '20'
  }
})