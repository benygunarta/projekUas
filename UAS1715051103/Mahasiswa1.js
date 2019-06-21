import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class Mahasiswa1 extends Component
{
 static navigationOptions =
 {
    title: 'SecondActivity',
 };
 
 constructor(props) {
    
       super(props)
 
       this.state={

        mhs_nim:'', 
        mhs_nama:'', 
        alamat:'',  
        kls_id:'', 
        foto:'',
 
        // IdHolder : '',
        // NameHolder : '',
        // SemesterHolder : '',
        // DepartmentHolder : '',
        // PhoneNumberHolder : ''
 
       }
    
     }
 
 componentDidMount(){
 
    fetch('https://reactnativecode.000webhostapp.com/Filter.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
       
          // Getting the id.
          id: this.props.navigation.state.params.ListViewClickItemHolder
       
        })
       
      }).then((response) => response.json())
            .then((responseJson) => {
 
              this.setState({

            
                mhs_nim : responseJson[0].mhs_nim,
                mhs_nama : responseJson[0].mhs_nama,
                alamat : responseJson[0].alamat,
                kls_id : responseJson[0].kls_id,
                foto : responseJson[0].foto
 
              })
              
            }).catch((error) => {
              console.error(error);
            });
       
 }
 
 render()
 {
    return(
       <View style = { styles.MainContainer }>
 
        <View style={{flex:1, flexDirection: 'column'}} >
       
         <Text style={styles.textViewContainer} > {'id = ' + this.state.mhs_nim} </Text>
 
         <Text style={styles.textViewContainer} > {'Name = ' + this.state.mhs_nama} </Text>
 
         <Text style={styles.textViewContainer} > {'Department = ' + this.state.alamat} </Text>
 
         <Text style={styles.textViewContainer} > {'Semester = ' + this.state.kls_id} </Text>
 
         <Text style={styles.textViewContainer} > {'Phone Number = ' + this.state.foto } </Text>
 
        </View>
 
      </View>
    );
 }
}


