import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

//Own Components
    import { Container } from './../components/Container';
    import {Logo} from './../components/Logo';
    import {  CardWithActions} from "./../components/Card";
    import {  InputWithRightButton} from "./../components/Input/";

//Styles
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor: 'blue',
        flex:1
    }
});
export default class LoginScreen extends Component {
    render(){
        return(
            <Container style={styles.container}>       
                <Logo version="1.0" />
                <CardWithActions>
                    <InputWithRightButton />
                </CardWithActions>
            </Container>
        );
    }
}