import React, {Component} from 'react';
import PropTypes from 'prop-types';

// UI
    import{
        View,
        StyleSheet,
        TextInput,
        Text,
        TouchableOpacity,
    } from 'react-native';
    //Icons
    import Ionicon from 'react-native-vector-icons/Ionicons';
    import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:"#A1A1A1",
        // backgroundColor:'coral',
        
    },
    input:{
        flex:1,
        color:'#BDBDBD',
        alignItems:'flex-start'
        
    },
    rightLabelContainer:{
        flexDirection:'row',

    },
    rightLabelText:{
        color:'#64ea7b',
        fontSize:15
    }
});
class InputWithLeftAndRightButton extends Component{
    static propTypes = {
        leftIconColor: PropTypes.string, 
        leftIconName: PropTypes.string, 
        leftIconSize: PropTypes.number,
        placeholder: PropTypes.string, 
        isPassword: PropTypes.bool,
        rightLabelText: PropTypes.string,
    }

    state = {
        inputValue:null
    }

    handleDeleteValue = () => {
        this.setState({
            inputValue: ''
        });
    }
    renderDeleteValueButton = () => {
        if (!this.state.inputValue || this.state.inputValue === '') {
            return null
        }

        return (
            <TouchableOpacity
                // style={styles.deleteValueButton}
                onPress={this.handleDeleteValue}>
                <FontAwesomeIcon
                    name="times-circle"
                    color="#BDBDBD"
                    size={18}
                />
            </TouchableOpacity>
        )
    }

    render(){
        const {
            leftIconName,
            leftIconSize,
            leftIconColor,
            placeholder,
            isPassword,
            rightLabelText
        } = this.props;

        return(
            <View style={styles.container}>
                <TouchableOpacity
                onPress={()=>alert('Quiero Info')}                       
                >
                    <Ionicon
                        name={leftIconName}
                        size={leftIconSize}
                        color={leftIconColor}
                    />
                </TouchableOpacity>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder={placeholder}
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={isPassword}
                    style={styles.input}
                    onChangeText={text => this.setState({ inputValue: text })}
                    value={this.state.inputValue}
                />
                {this.renderDeleteValueButton()}
                <TouchableOpacity 
                    style={styles.rightLabelContainer}
                    onPress={()=>alert('Me olvidé mi contraseña')}
                    >
                    <Text style={styles.rightLabelText}>
                        {rightLabelText}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default InputWithLeftAndRightButton;