import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Quiz from '../pages/Quiz';
import Main from '../pages/Main';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                headerShown: false
            }
        },
        Quiz
    })
);

export default Routes;