import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Props2 from './Props1';

export default class AboutMe extends React.Component {
  static navigationOptions = {
    Props1: null,
  };
    render() {
        return (
        <View style={styles.container}>
         <Props2/>
            <View style={styles.vTengah}>
                <ImageBackground style={{alignItems:'center', width:365, height:300}} 
                source={require("./images.jpg")}>
                <Image style ={styles.gambar} source={require("./beny.jpg")}/>
                </ImageBackground>
            </View>
            <View style={styles.Tengah}>
                <Text style={styles.text}>I Made Beny Gunarta</Text>
                <Text style={styles.text}>1715051103</Text>
                <Text style={styles.text}>4A</Text>
                <Icon name='ios-arrow-dropup-circle' alignItems='center' size={25} marginTop={10} />
            </View>
            <View style={styles.Tengah1}></View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gambar:{
        width:150,
        height:150,
        alignItems:'center',
        borderRadius:100,
        marginTop:220,
      },
      Tengah:{
        flex:1,
        marginTop:55,
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems: 'center',
      },
      Tengah1: {
        flex:1,
        borderColor: 'black',
        borderWidth: 1,
      },
      text:{
        fontSize: 20,
        fontWeight:'bold',
      },
});