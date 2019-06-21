import React from 'react';
import {Text, View} from 'react-native';

const footer = (props) => {
  return (
    <View style={{height:70, justifyContent:'center' ,alignItems:'center',backgroundColor: "blue"}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>
            Universitas Pendidikan Ganesha</Text>
       
    </View>
  );
}

export default footer;
