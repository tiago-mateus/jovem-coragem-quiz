import * as React from 'react';
import { StyleSheet, View, Animated, Dimensions, ImageBackground, Image } from 'react-native';
import { Button, Text, Icon} from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle'
import {navigate, navigation} from 'react-navigation';



var {width, height} = Dimensions.get('window');
  
export default class Main extends React.Component{

constructor(props){
  super(props);
  this.state = {  

    animationI: new Animated.Value(0.7),
    positionbox2: new Animated.Value(100),
    positionbox3: new Animated.Value(100),
    seconds: 10,
    questionId: 1,
    qtcorrect: 0,
    qtincorrect: 0,
    
  }
}

_AnimatedView = ()=>{
Animated.parallel([Animated.spring(this.state.animationI, {
    toValue: 1,
    speed: 5
}).start(),

Animated.timing(this.state.positionbox2,{
    toValue: 110,
    speed: 0.2,
}).start(),
Animated.timing(this.state.positionbox3,{
    toValue: 120,
    speed: 0.2,
}).start()
]).start();
          
      
}

componentDidMount(){

  this._AnimatedView();
  
}


render (){
    const { params } = this.props.navigation.state;
    const score = params ? params.score : null;
  return (


    <ImageBackground resizeMode='cover' source={require("../../assets/bg3.jpg")} style={[styles.container, {width: '100%', height: '100%', flex: 1}]}>

        <Animated.View style={[styles.boxQuestion, {zIndex:999, transform: [{scale: this.state.animationI}]}]}>
           
            <Image source={require('../../assets/check.png')} style={{width: 100, height: 100, alignSelf: 'flex-start', marginLeft: 30, marginTop: 30}}></Image>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold', fontSize: 25, color: '#f1c40f', alignSelf: 'flex-end', position: 'absolute', top: 65, right: 70}}>PONTOS</Text>
  <Text style={{fontStyle: 'italic', fontWeight: 'bold', fontSize: 100, color: '#f1c40f', alignSelf: 'center', top: 60}}>{score}</Text>
          

          {/* 

          <Animated.View style={[styles.containerTimer, { transform: [{scale: this.state.animationI}]}]}>
            <CountdownCircle  seconds={this.state.seconds} radius={30} borderWidth={5} color="#f1c40f" bgColor="#fff" textStyle={{ fontSize: 20 }} onTimeElapsed={() => (data.length+1) != this.state.questionId? "" : "" }/>
          </Animated.View>

          <View style={styles.containerQuestion}>
            <Text style={{textAlign: 'center', fontSize: 15, fontStyle: 'italic', color: 'gray', marginBottom: 5}}>{questions.category}</Text>
            <Text style={{textAlign: 'center', fontSize: 17, fontWeight: 'bold', fontStyle: 'italic'}}>{questions.question}</Text>
          </View>

          <View style={styles.containerButton}>
                  {questions.answers.map((answer) => ( 
                    <Button title={answer} type="outline" onPress={()=>{this.verificaResposta(answer, questions)}} buttonStyle={[styles.btn]} titleStyle={{color: 'gray'}}/>
                  ))}
          </View>  */}

        </Animated.View>
    </ImageBackground>
        

      );
}
}

const styles = StyleSheet.create({
    containerButton:{
        zIndex: 9999,
        marginBottom: 20
    },
    containerQuestion:{
        padding: 20,
        marginBottom: 5,
        zIndex: 9999

    },
    containerTimer:{
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 5,
      position: 'relative',
      zIndex: 9999

  },
    btn:{
        borderColor: 'gray',
        width: 260,
        alignSelf: 'center',
        margin: 5,
        borderRadius: 30,
        borderWidth: 1.3,
      zIndex: 9999

    },
    container: {
      flex: 1,
      backgroundColor: '#f1c40f',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999

    },
    boxQuestion:{
      backgroundColor: 'white',
      width: 300,
      height: height - 200,
      justifyContent: 'flex-start',
      borderRadius: 7,
      zIndex: 9999
    },
    boxQuestion2:{
      position: 'absolute',  
      backgroundColor: 'white',
      width: 285,
      height: height - 200,
      zIndex: 1,
      borderRadius: 7,
      opacity: 0.7,
    },
    boxQuestion3:{
      position: 'absolute',  
      backgroundColor: 'white',
      width: 265,
      height: height - 200,
      zIndex: 1,
      borderRadius: 7,
      opacity: 0.5,
    },
  });