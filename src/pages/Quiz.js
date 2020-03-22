import * as React from 'react';
import { StyleSheet, View, Animated, Dimensions, ImageBackground } from 'react-native';
import { Button, Text, Icon} from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle'
import {navigate, navigation} from 'react-navigation';

const data = [
  {
    "id": 1,
    "category":"Igreja",
    "question":"Qual o nome do primeiro Papa da Igreja Católica Apostólica Romana?",
    "correct_answer":"São Pedro",
    "answers":[
       "São Paulo",
       "São Pio X",
       "Junior",
       "São Pedro"
    ]
 },
 {
  "id": 2,
  "category":"Santos",
  "question":"Qual santo é considerado o patrono da Igreja?",
  "correct_answer":"São José",
  "answers":[
     "Gabriel OM",
     "São José",
     "Papa Franciso",
     "São João"
  ]
},
{
 "id": 3,
 "category":"Liturgia",
 "question":"Qual o nome do livro que o padre usa para celebrar a Missa?",
 "correct_answer":"Missal",
 "answers":[
    "Missal",
    "Lecionário",
    "Evangeliário",
    "Breviário"
 ]
},
{
 "id": 4,
 "category":"Bíblia",
 "question":"Segundo a Bíblia, devemos perdoar as pessoas quantas vezes?",
 "correct_answer":"70x7",
 "answers":[
    "12x1",
    "6x5",
    "70x7",
    "1+3"
 ]
},
{
 "id": 5,
 "category":"Igreja",
 "question":"Qual é o verdadeiro nome do Papa emérito Bento XVI??",
 "correct_answer":"Joseph Ratzinger",
 "answers":[
    "Joseph Ratzinger",
    "Paulo Ricardo",
    "Angelo Montinni",
    "Glauber"
 ]
},
{
 "id": 6,
 "category":"Igreja",
 "question":"Qual foi o primeiro papa a visitar o Brasil?",
 "correct_answer":"São João Paulo II",
 "answers":[
    "São Pedro",
    "São João Paulo II",
    "Marcos Ambrósio",
    "Arcanjo Miguel"
 ]
},
{
 "id": 7,
 "category":"Igreja",
 "question":"O veículo oficial do Papa é o?",
 "correct_answer":"Papa Móvel",
 "answers":[
    "Fiat Móvel",
    "Papa Móvel",
    "Bike Santa",
    "Papan Mobile"
 ]
},
{
 "id": 8,
 "category":"Bíblia",
 "question":"Qual salmo o diabo usa para tentar Jesus no deserto??",
 "correct_answer":"Salmo 23",
 "answers":[
    "Salmo 23",
    "Salmo 91",
    "Salmo 102",
    "Salmo 10"
 ]
},
{
 "id": 9,
 "category":"Doutrina",
 "question":"O que significa a 'Santíssima Trindade'?",
 "correct_answer":"Deus Pai, Deus Filho e Deus Espírito Santo",
 "answers":[
    "Pedro, Paulo e João",
    "Deus, alá e Jesus",
    "Deus, moisés e abraão",
    "Deus Pai, Deus Filho e Deus Espírito Santo"
 ]
},
{
 "id": 10,
 "category":"Bíblia",
 "question":"Quem negou Jesus?",
 "correct_answer":"Judas",
 "answers":[
    "Pedro",
    "Judas",
    "Matheus",
    "Moisés"
 ]
},
{
 "id": 11,
 "category":"Bíblia",
 "question":"Quantos livros tem a Bíblia?",
 "correct_answer":"73 Livros",
 "answers":[
    "93 Livros",
    "53 Livros",
    "73 Livros",
    "66 Livros"
 ]
},
{
 "id": 12,
 "category":"Igreja",
 "question":"Segundo a tradição, quem foram as duas 'colunas' da Igreja Católica?",
 "correct_answer":"São Pedro e São Paulo",
 "answers":[
    "São Pedro e São Paulo",
    "São Gabriel e São Miguel",
    "Tomé e João",
    "Maria e Santo Antônio"
 ]
},
{
 "id": 13,
 "category":"Igreja",
 "question":"O que é um Conclave?",
 "correct_answer":"Reunião onde os Cardeais elegem o novo Pontifice Romano",
 "answers":[
    "Onde o Papa faz suas homilias",
    "Nnome do auxiliar Papal",
    "Reunião onde os Cardeais elegem o novo Pontifice Romano",
    "É uma Oração"
 ]
},
{
 "id": 14,
 "category":"Igreja",
 "question":"O que é sede-Vacante?",
 "correct_answer":"É quando o Papa morre ou renuncia",
 "answers":[
    "É quando o Papa viaja",
    "É quando o Papa morre ou renuncia",
    "É quando o Papa fica doente",
    "É quando o Papa celebra Missa"
 ]
},
{
 "id": 15,
 "category":"Liturgia",
 "question":"Que nome se dá a mesa da palavra?",
 "correct_answer":"Ambão",
 "answers":[
    "Ambão",
    "Altar",
    "Sacrario",
    "Missal"
 ]
}
  ];

var {width, height} = Dimensions.get('window');
  
export default class Main extends React.Component{

constructor(props){
  super(props);
  this.state = {  
    data: [],
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

  this.setState({data})
  this._AnimatedView();
  
}

verificaResposta(answer, questions){
  if(questions.correct_answer == answer){
    let id = this.state.questionId;
    let qtcorrect = this.state.qtcorrect;
    this.setState({qtcorrect: qtcorrect+1})
    this.setState({questionId:id+=1})
    this.setState({seconds: 0})
    this.setState({animationI: new Animated.Value(0.7)})
    this.setState({positionbox2: new Animated.Value(100)})
    this.setState({positionbox3: new Animated.Value(100)})
    setTimeout(()=>{this._AnimatedView(); this.setState({seconds: 10}) }, 10)
  }else{
    let qtincorrect = this.state.qtcorrect;
    this.setState({qtincorrect: qtincorrect+1})
    let id = this.state.questionId;
    this.setState({questionId:id+=1})
    this.setState({seconds: 0})
    this.setState({animationI: new Animated.Value(0.7)})
    this.setState({positionbox2: new Animated.Value(100)})
    this.setState({positionbox3: new Animated.Value(100)})
    setTimeout(()=>{this._AnimatedView(); this.setState({seconds: 10}) }, 10)
  }
}

timer(){


    setTimeout(() => 
    {

        this.setState({seconds: 0})
        
    }, 10);
    setTimeout(() => 
    {
      let id = this.state.questionId;
      this.setState({questionId:id+=1})
        this.setState({seconds: 10})
        this.setState({animationI: new Animated.Value(0.7)})
        this.setState({positionbox2: new Animated.Value(100)})
        this.setState({positionbox3: new Animated.Value(100)})
        setTimeout(()=>{this._AnimatedView()}, 10)

    }, 20);
}

render (){
const {data, questionId} = this.state;
if(questionId == data.length){
  this.props.navigation.navigate('Scores',{score: this.state.qtcorrect});
}
  return (


    <ImageBackground resizeMode='cover' source={require("../../assets/bg3.jpg")} style={[styles.container, {width: '100%', height: '100%', flex: 1}]}>
      {data.map((questions, index) => ( questions.id == this.state.questionId &&
        <Animated.View key={questions.id} style={[styles.boxQuestion, {zIndex:(data.length- index)+1, transform: [{scale: this.state.animationI}]}]}>

          <Text style={{alignSelf: 'flex-end', marginRight:25, position: 'absolute', top: 10,right:-5, fontStyle: 'italic', fontWeight: 'bold', fontSize: 15}}>{index+1} / {data.length}</Text>

          <Animated.View style={[styles.containerTimer, { transform: [{scale: this.state.animationI}]}]}>
            <CountdownCircle  seconds={this.state.seconds} radius={30} borderWidth={5} color="#f1c40f" bgColor="#fff" textStyle={{ fontSize: 20 }} onTimeElapsed={() => this.timer()}/>
          </Animated.View>

          <View style={styles.containerQuestion}>
            <Text style={{textAlign: 'center', fontSize: 15, fontStyle: 'italic', color: 'gray', marginBottom: 5}}>{questions.category}</Text>
            <Text style={{textAlign: 'center', fontSize: 17, fontWeight: 'bold', fontStyle: 'italic'}}>{questions.question}</Text>
          </View>

          <View style={styles.containerButton}>
                  {questions.answers.map((answer) => ( 
                    <Button title={answer} type="outline" onPress={()=>{this.verificaResposta(answer, questions)}} buttonStyle={[styles.btn]} titleStyle={{color: 'gray'}}/>
                  ))}
          </View> 

        </Animated.View>
      ))}

        <Animated.View style={[styles.boxQuestion2,{ top: this.state.positionbox2, transform: [{scale: this.state.animationI}]}]}></Animated.View>
        <Animated.View style={[styles.boxQuestion3,{ top: this.state.positionbox3,transform: [{scale: this.state.animationI}]}]}></Animated.View>
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
      justifyContent: 'flex-end',
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