import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Animated, ImageBackground } from 'react-native';
import { Button, Text} from 'react-native-elements';

export default class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

    componentDidMount(){
    }

    

render (){

    return (
    <ImageBackground resizeMode='cover' source={require("../../assets/bg3.jpg")} style={[styles.container, {width: '100%', height: '100%', flex: 1}]}>
            <Button onPress={()=>{this.props.navigation.navigate('Quiz')}}title="INICIAR" type="outline"  buttonStyle={styles.btn} titleStyle={{color: 'black',        fontWeight: 'bold',
       fontStyle: 'italic'} }/>
    </ImageBackground>
      );
}
}
const styles = StyleSheet.create({
    containerButton:{
      flex:1,
      justifyContent: 'flex-end',
      marginBottom: 25,
      marginTop: 0
    },
    containerQuestion:{
      flex:1,
      justifyContent: 'flex-end',
      padding: 25,
      marginBottom: 60
    }
    ,
    btn:{
      borderColor: 'black',
       width: 220,
       height: 50,
       backgroundColor: 'white',
        alignSelf: 'center',
         margin: 5,
          borderRadius: 30, 
            borderWidth: 0.2,
            marginBottom: 70
          }
          ,
    container: {
      flex: 1,
      backgroundColor: '#f1c40f',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    boxQuestion:{
      backgroundColor: 'white',
      width: 300,
      height: 450,
      borderRadius: 7,
      position: 'absolute'
    },
    boxQuestion2:{
      position: 'absolute',  
      backgroundColor: 'white',
      width: 285,
      height: 300,
      zIndex: 1,
      borderRadius: 7,
      top:285,
      opacity: 0.7
    } ,
    boxQuestion3:{
      position: 'absolute',  
      backgroundColor: 'white',
      width: 265,
      height: 300,
      zIndex: 1,
      borderRadius: 5,
      top:300,
      opacity: 0.5
    } 
  });
  
