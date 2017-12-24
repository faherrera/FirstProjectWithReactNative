import React,{Component} from "react";
//Components
import PropTypes from 'prop-types';
import { StyleSheet,Picker,View } from "react-native";

const styles = StyleSheet.create({
    pickerContainer:{
        height: 40,
        borderBottomColor:'#DBDBDB',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    picker:{
        height:'100%',
    }
});
class SimplePicker extends Component {

    static propTypes = {
        data: PropTypes.array,
        prompt: PropTypes.string,
    }
    state = {
        documentType: 'dni',

    }
    
    renderPickerItems = () => {
        const {data} = this.props;

        if (!data) return null

        return data.map(item => (
            <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
            />
        ));
    }

   

    handleValueChange = (itemValue)=> {
        this.setState({
            documentType: itemValue
        });
    }

    render(){
        const {prompt} = this.props;

        return(
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    onValueChange={this.handleValueChange}
                    selectedValue={this.state.documentType}
                    prompt={prompt}
                >
                    {this.renderPickerItems()}

                </Picker>
            </View>
        );
    }
}

export default SimplePicker;