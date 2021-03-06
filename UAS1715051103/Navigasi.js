import React from 'react';
import {StyleSheet,Text, View ,TouchableHighlight, TextInput, Image } from 'react-native';
import Props2 from './Props1';
import Footer from './Footer';

export default class Navigasi extends React.Component {
  static navigationOptions = {
    Props1: null,
  };
  constructor (props){
    super(props)
    this.state = {
    nama: '',
    }
}
  render(){
    return(
      <View style ={styles.containerMain}>
      <Props2/>
           
        <View style = {styles.box4}>
          <View style = {styles.tentang}>
            <TouchableHighlight
                  onPressIn={() => this.props.navigation.navigate('Kelas')}
                  accessibilityLabel="Kelas"
                  style={styles.vItemMenu}>
                  <Text style={styles.text}>Kelas</Text>
              </TouchableHighlight>
          </View>

          <View style = {styles.tentang}>
            <TouchableHighlight
                  onPressIn={() => this.props.navigation.navigate('Mahasiswa')}
                  accessibilityLabel="Mahasiswa"
                  style={styles.vItemMenu}>
                  <Text style={styles.text}>Mahasiswa</Text>
              </TouchableHighlight>
          </View>

          <View style = {styles.tentang}>
            <TouchableHighlight
                  onPressIn={() => this.props.navigation.navigate('Foto')}
                  accessibilityLabel="Masukan Foto Anda Sebagai Kenang Kenangan"
                  style={styles.vItemMenu}>
                  <Text style={styles.text}>Masukan foto</Text>
              </TouchableHighlight>
          </View>
          <View style = {styles.tentang}>
            <TouchableHighlight
                  onPressIn={() => this.props.navigation.navigate('AboutMe')}
                  accessibilityLabel="Masukan Foto Anda Sebagai Kenang Kenangan"
                  style={styles.vItemMenu}>
                  <Text style={styles.text}>About Me</Text>
              </TouchableHighlight>
          </View>
        
        </View>


          <View style = {styles.box5}></View>
          
        </View>

    );
  }
}
const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex:1,
    },
    boxAtas: {
      flex:1,
      alignItems:'center',
      justifyContent:'space-around',
    },
    gambar:{
        marginTop:10,
        justifyContent: 'space-around',
        width:150,
        height:150,
        alignItems:'center',
        borderRadius:100,
      },
    vItemMenu:{
        flex:1,
        backgroundColor:'orange',
        flexDirection:'column',
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    boxKasir:{
        marginLeft: 10,
        backgroundColor:'orange',
        padding:10,
        width: 325,
        height:70,
        borderRadius:10,
        marginRight: 5,
    },
    box3:{
      flex:0.5,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'row',
    },
    box31:{
      flex: 1,
      backgroundColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'column',
    },
    box4:{
      flex:0.5,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtInput: {
      width: 300,
      backgroundColor:'#fff',
      borderColor: 'green',
      alignItems: 'center',
      borderWidth: 2,
  },
    box5:{
        flex: 0.5,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection : 'row',
      },
    text:{
      fontSize:20,
      color:'white',
    },
    text1:{
      fontSize:20,
      color:'black',
    },
    tentang:{
      backgroundColor:'orange',
      justifyContent:'space-around',
      padding:10,
      width: 325,
      height:70,
      borderRadius:10,
      marginTop:10,
    },
});