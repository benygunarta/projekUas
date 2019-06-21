import React, {Component} from 'react'
import {StyleSheet,Text, View ,TouchableHighlight, Input, Image,Button } from 'react-native';
import Props2 from './Props1';
import Footer from './Footer';
// import { Button } from 'react-native-elements';
import axios from 'axios';

export default class InputMhs extends Component {
 

  state = {
    nama: '',
  }

  handleChange = event => {
    this.setState({ nama: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://benygunarta.000webhostapp.com/API/tambah_mhs.php`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View onSubmit={this.handleSubmit}>
          
            
            <Input type="text" name="name" onChange={this.handleChange} />
        
          <Button type="submit">Add</Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});