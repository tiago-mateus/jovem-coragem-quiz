import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Button, Text} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
const data = [
  {
    question: "test9grgfhsfhshghfgdjhgjhdjsfdhgfgsgfdsgfdsgdhsgsdfasdsdgasdgdgdfgadfhfdhafhafhsfdffafsasdafsdfasfasdfas890e?",
    item: "$2,577.51",
    item2: "Earnings",
    item3: "$0.14",
    item4: "$0.14",
    id: 0
  },
  {
    question: "teste?",
    item: "$2,577.51",
    item2: "Earnings",
    item3: "$0.14",
    item4: "$0.14",
      id: 1
  },{
  question: "test",
  item: "$2,577.51",
  item2: "Earnings",
  item3: "$0.14",
  item4: "$0.14",
  id: 2
},{
  question: "te",
  item: "$2,577.51",
  item2: "Earnings",
  item3: "$0.14",
  item4: "$0.14",
  id: 3
}];
export default class Main extends React.Component{
  state = {};
render (){
  const rows = data;
    return (
        <View style={styles.container}>
        {rows.map((questions, index) => ( questions.id != 0 &&
        <View key={questions.id} style={[styles.boxQuestion, {zIndex:(rows.length- index)}]}>
          <View style={styles.containerQuestion}>
            <Text style={{textAlign: 'center', fontSize: 15, fontStyle: 'italic', color: 'gray', marginBottom: 5}}>
              História da Igreja
              </Text>
            <Text style={{textAlign: 'center', fontSize: 17, fontWeight: 'bold', fontStyle: 'italic'}}>
            {questions.question}
              </Text>
          </View>
          <View style={styles.containerButton}>
            <Button title={questions.item} type="outline" onPress={()=>{questions.id = 0}} buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
            <Button title={questions.item2} type="outline" buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
            <Button title={questions.item3} type="outline" buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
            <Button title={questions.item} type="outline" buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
          </View>
        </View>
))}
        <View style={styles.boxQuestion2}></View>
        <View style={styles.boxQuestion3}></View>
        </View>
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
      borderColor: 'gray',
       width: 260,
        alignSelf: 'center',
         margin: 5,
          borderRadius: 30,   borderWidth: 1.3,}
          ,
    container: {
      flex: 1,
      backgroundColor: '#f1c40f',
      alignItems: 'center',
      justifyContent: 'center',
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
  
