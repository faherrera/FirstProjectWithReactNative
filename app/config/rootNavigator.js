import {StackNavigator} from 'react-navigation';

//Screens
    import LoginScreen from './../screen/LoginScreen';
    import SplashScreen from './../screen/SplashScreen';

const RootNavigator = StackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            header:null
        }
    },
    
},{
    // initialRouteName:'Login'
});

export default RootNavigator;
