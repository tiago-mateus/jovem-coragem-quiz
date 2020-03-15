import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Button, Text} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
const data = [
  {
    id: 1,
    questionTitle: "Quem foi o primeiro Papa da Igreja?",
    questionType: "História da Igreja",
    questionOne: {
      text:"São Pedro",
      value: true
    },
    questionTwo: {
      text:"São Paulo",
      value: false
    },
    questionThree:{
      text:"Junior",
      value: false
    },
    questionFour: {
      text:"São João Paulo II",
      value: false
    },
    bg: 'white'
  },
  {
    id: 2,
    questionTitle: "Quem foi o primeiro Papa da Igreja?",
    questionType: "História da Igreja",
    questionOne: {
      text:"São Pedro",
      value: true
    },
    questionTwo: {
      text:"São Paulo",
      value: false
    },
    questionThree:{
      text:"Junior",
      value: false
    },
    questionFour: {
      text:"São João Paulo II",
      value: false
    },
    bg: 'white'
  },
  {
    id: 3,
    questionTitle: "Quem foimeiro Papa da Igreja?",
    questionType: "História da Igreja",
    questionOne: {
      text:"São Pedro",
      value: true
    },
    questionTwo: {
      text:"São Paulo",
      value: false
    },
    questionThree:{
      text:"Junior",
      value: false
    },
    questionFour: {
      text:"São João Paulo II",
      value: false
    },
    bg: 'white'
  }];
export default class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

    componentDidMount(){
      this.setState({data})
    }

    verificaResposta(data, value){
      if(value){
        data.bg = {
          borderColor: 'green',
          color: 'green',
          };
        this.setState(data);
       
        setTimeout(() => 
        {
          data.id = 0;
          this.setState(data);
        }, 900);

      }
    }

render (){
const {data} = this.state;
    return (
        <View style={styles.container}>
        {data.map((questions, index) => ( questions.id != 0 &&
        <View key={questions.id} style={[styles.boxQuestion, {zIndex:(data.length- index)+1}]}>
          <View style={styles.containerQuestion}>
            <Text style={{textAlign: 'center', fontSize: 15, fontStyle: 'italic', color: 'gray', marginBottom: 5}}>
              {questions.questionType}
              </Text>
            <Text style={{textAlign: 'center', fontSize: 17, fontWeight: 'bold', fontStyle: 'italic'}}>
            {questions.questionTitle}
              </Text>
          </View>
          <View style={styles.containerButton}>
            <Button title={questions.questionOne.text} type="outline" onPress={()=>{this.verificaResposta(questions, questions.questionOne.value)}} buttonStyle={[styles.btn, questions.bg]} titleStyle={{color: 'gray'}}/>
            <Button title={questions.questionTwo.text} type="outline" onPress={()=>{this.verificaResposta(questions, questions.questionTwo.value)}} buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
            <Button title={questions.questionThree.text} type="outline" onPress={()=>{this.verificaResposta(questions, questions.questionThree.value)}} buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
            <Button title={questions.questionFour.text} type="outline" onPress={()=>{this.verificaResposta(questions, questions.questionFour.value)}} buttonStyle={styles.btn} titleStyle={{color: 'gray'}}/>
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
  
