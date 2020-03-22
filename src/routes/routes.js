import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Quiz from '../pages/Quiz';
import Main from '../pages/Main';
import Scores from '../pages/Scores';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                headerShown: false
            }
        },
        Quiz:{
            screen: Quiz,
            navigationOptions:{
                headerShown: false
            }
        },
        Scores: {
            screen: Scores,
            navigationOptions:{
                headerShown: false
            }
        }
        
    })
);

export default Routes;