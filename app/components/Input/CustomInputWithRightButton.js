
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { 
    StyleSheet,
    View
 } from "react-native";

 const styles = StyleSheet.create({
     container:{
         width: '100%',
         height:40,
         flexDirection:'row',
         justifyContent:'space-between',
     },
     customComponentContainer:{
        width:'25%',
        height:40,
        alignItems:'stretch'
     },
     wrappedComponentContainer:{
         width: '75%',
         height: 40,
         alignItems: 'stretch'
     }
 });

/**
 * WrapperComponent => Componente original
 * CustomComponent => COmponente modificado.
 */
export default ( WrapperComponent, CustomComponent) => {
    return class extends Component{
        static propTypes = {
            customProps: PropTypes.any,
        };

        render(){
            const {customProps,...wrappedProps} = this.props;
            return(
                <View style={styles.container}>
                    <View style={styles.customComponentContainer}>
                        <CustomComponent {...customProps}/>
                    </View>
                    <View style={styles.wrappedComponentContainer}>
                        <WrapperComponent {...wrappedProps} />
                    </View>
                </View>
            )
        }
    }
};