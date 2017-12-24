import React, { Component } from 'react';

//UI
    import {
        Text,
        TouchableOpacity,
        View,
        StyleSheet,
        TextInput,
    } from 'react-native';
    //OWN
    import {  CardActionSeparator } from "./../../Separator/";
    import { ChangingIconButton} from './../../Button/';

    //Icons
    import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const INPUTHEIGHT = 40;

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height: INPUTHEIGHT,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
        // backgroundColor:'red'
    },
    inputContainer:{
        // backgroundColor:'green'
        flex:1,
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        alignItems:'center', 
        justifyContent:'center'
    },
    textInput:{
        flex:1,
        height: INPUTHEIGHT,
        color: '#BDBDBD'
    },
    deleteValueButton:{
        height: 20,
        width:20,
        // backgroundColor:'red'
    },
    changingIconButton:{
        marginLeft: 10
    }
});
export default class InputWithRightButton extends Component {
    state = {
        isFocused: false,
        inputValue: null
    }

    handleBlur = () => {
        this.setState({
            isFocused:false
        });
    };
    handleFocus = () => {
        this.setState({
            isFocused: true
        });
    };

    handleDeleteValue = () =>{
        this.setState({
            inputValue:''
        });
    }
    renderDeleteValueButton = () => {
        if (!this.state.inputValue || this.state.inputValue === '') {
            return null
        }

        return (
            <TouchableOpacity
                style={styles.deleteValueButton}
            onPress={this.handleDeleteValue}>
                <FontAwesomeIcon
                    name="times-circle"
                    color="#BDBDBD"
                    size={18}
                />
            </TouchableOpacity>
        )
    }


    render() {

        const inputContainerStyle = [styles.inputContainer];
        
        if (this.state.isFocused) {
            inputContainerStyle.push({
                borderBottomColor:'green'
            });
        }

        return (
            <View style={styles.container}>
                <View style={inputContainerStyle}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.textInput} 
                        underlineColorAndroid="transparent"
                        placeholder="N° de tarjeta" 
                        placeholderTextColor="#BDBDBD"
                        onChangeText={text => this.setState({inputValue:text})}
                        value={this.state.inputValue}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    {this.renderDeleteValueButton()}
                    <CardActionSeparator 
                        height={20}
                        width={1}
                        color="#BDBDBD"
                    />
                </View>
                <ChangingIconButton
                    style={styles.changingIconButton}
                    activeIconName="ios-lock-outline"
                    activeIconColor="green"
                    inactiveIconName="ios-unlock-outline"
                    inactiveIconColor="#020202"
                    size={30}
                    defaultValue
                    />
            </View>
        );
    }
}