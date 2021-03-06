import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import TabNavigator from "../navigation/MainNavigator";
import StartScreen from "../screens/StartScreen";

export default createAppContainer(createStackNavigator({
        Home: {
            screen: StartScreen,
            navigationOptions: {
                header: null
            }
        },
        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                title: 'Sign In',

            },
        },
        Main: {
            screen: TabNavigator,

        },

    },
    {
        initialRoutName: 'StartScreen',
        defaultNavigationOptions: {

            headerStyle: {
                backgroundColor: '#E5E5E5',
            },
            headerTitleStyle: {
                fontFamily: 'Roboto',
                width: '65%',
                textAlign: 'center',
            },
        },
    },
    )
);