import React, { Component } from 'react';

//Components
    import { 
    View,
    StyleSheet,
    Text } from "react-native";

const styles = {
    container:{
        flex:1,
        backgroundColor: 'lightblue',
        alignItems:'center',
        justifyContent:'center'

    },
    text:{
        fontSize:30,
        color:'#000'
        
    }

}
export default class SplashScreen extends Component {

    componentDidMount() {
            setTimeout(() => {
                this.props.navigation.navigate('Login');
            }, 1500);
    }

    render() {
        return (
            <View style={styles.container}>      
                <Text style={styles.text}>
                    San Pedro de Colalao App 
                </Text>

            </View>      
        );
    }
}