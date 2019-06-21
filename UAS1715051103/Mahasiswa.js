import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';
import Props2 from './Props1';
import Footer from './Footer';


export default class Mahasiswa extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'https://benygunarta.000webhostapp.com/?dir=API/';
    this.state = {
        categories: []
    };
    
    
  }
  componentDidMount() {
    axios.get(`https://benygunarta.000webhostapp.com/API/get_all_mhs.php`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.mhs_nama}
    leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
  />
)
  render() {
    return (
        <View style={styles.container} >
          <Props2></Props2>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
             />
             
        <Footer></Footer>
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