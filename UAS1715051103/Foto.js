import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button, Alert, Image, ActivityIndicator,Modal
} from 'react-native';
//import ImagePicker from 'react-native-image-picker';
import Props2 from './Props1';
export default class Foto extends Component{
    constructor(props) {
      super(props);
      this.state = {
                    srcImg: '',
                    uri: '',
                    fileName: '',
                    loading: false,
                   };
    }
 
  choosePicture = () => {
      var ImagePicker = require('react-native-image-picker');
      var options = {
          title: 'Pilih Gambar',
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
      };
      ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            console.log(response.fileName);
            this.setState({
              srcImg: { uri: response.uri },
              uri: response.uri,
              fileName: response.fileName
            });
          }
      });
  };
 
  uploadPicture = () => {
    console.log('mulai upload');
    this.setState  ({loading : true })
 
    const data = new FormData();
    //data.append('id', 'id apa saja'); // you can append anyone.
    data.append('fileToUpload', {
      uri: this.state.uri,
      type: 'image/jpeg',
      name: this.state.fileName,
    });
    const url= "http://wadaya.rey1024.com/api/uploadimg.php"
    fetch(url, {
      method: 'post',
      body: data
    })
    .then((response) => response.json())
    .then((responseJson) =>
      {
        console.log(responseJson);
        this.setState  ({
            loading : false
           })
      });
  }
  render() {
    return (
        <View style={styles.conMain} >
      {
          (this.state.loading===true)&&
                (
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={this.state.loading}
                        onRequestClose={()=>{
                            alert('Modal has been closed');
                        }}
                        >
                        <ActivityIndicator
                            animating={true}
                            style={styles.indicator}
                            size ="large">
                        </ActivityIndicator>
                    </Modal>
                        
                    
            )
        }
 
          <Props2></Props2>
        
        
          <View style={styles.conPreview}>
           {(this.state.srcImg!='') &&
            (<Image source={this.state.srcImg} style={styles.aploadAvatar}></Image>)
         }   
          </View>
          <View style={styles.conButton}>
              <Button
              onPress={()=>this.choosePicture()
                  }
                  title="pilih foto">
              </Button>
              <Button
                  onPress={()=> this.uploadPicture()}title="upload foto">
                      
              </Button>
          </View>
        
        </View>
          
      
    );
  }
}
 
const styles = StyleSheet.create({
  conMain : {
    flex:1
  },
  conHeader : {
    flex:1,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader : {
    fontSize: 20,
    color :'white'
  },
  conPreview: {
    flex:8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  conButton: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  uploadAvatar: {
    height: 400,
    width: 400
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
});