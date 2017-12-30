import React, { Component } from 'react';
import PropTypes from "prop-types";

import { View, Text, Image, StyleSheet } from 'react-native';

//Own Components
    import { Container } from './../components/Container';
    import {Logo} from './../components/Logo';
    import {  CardWithActions} from "./../components/Card";
    import {  InputWithRightButton,SimplePicker,InputWithLeftAndRightButton} from "./../components/Input/";
    import CustomInputWithRightButton from './../components/Input/CustomInputWithRightButton';
    import {GradientButton} from './../components/Button';

    //Styles
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor: 'blue',
        flex:1
    }
});

const CustomInput = CustomInputWithRightButton(InputWithRightButton,SimplePicker);
export default class LoginScreen extends Component {
    // static propTypes = {
    //     data: PropTypes.array
    // }

    render(){
        return(
            <Container style={styles.container}>       
                <Logo version="1.0" />
                <CardWithActions>
                    <InputWithRightButton 
                        placeholder="N° de tarjeta"
                        />

                    <CustomInput 
                        placeholder="N° de documento"
                        customProps={{
                            data:[
                                {label:'DNI',value:'dni'},
                                {label:'Pasaporte',value:'pasaporte'},
                                {label:'CE',value:'ce'},
                            ],
                            prompt: "Selecciona tipo de documento"
                        }}
                    />

                    <InputWithLeftAndRightButton 
                        leftIconName="ios-information-circle-outline"
                        leftIconSize={30}
                        leftIconColor="blue"
                        placeholder="Clave Web"
                        isPassword
                        rightLabelText="¿La olvidaste?"
                    />
                    <GradientButton
                        buttonLabel="Ingresar :)"
                        onPress={() => {
                            alert("Aquí entro al Login")}}
                        width="60"
                        height={40}
                    />
                </CardWithActions>
            </Container>
        );
    }
}