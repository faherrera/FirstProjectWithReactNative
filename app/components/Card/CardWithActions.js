import React from 'react';

//Vector Icons
        import Icon from 'react-native-vector-icons/MaterialIcons';
    //UI 
        import {
            Dimensions,
            View,
            Text,
            StyleSheet,
            TouchableOpacity, //Boton sin estilos.
            Image
        } from 'react-native';
    //Own
        import { CardActionSeparator} from './../Separator/';

const {width,height} = Dimensions.get('window');
const RADIUS = 10;
//Styles
const styles = StyleSheet.create({
    container:{
        height: height * 0.4,
        width: width * 0.9,
        // backgroundColor: 'white',
        borderRadius: RADIUS,
        marginBottom:height * 0.05, //Le doy un margen abajo pensando en el largo de la ventana.
    },
    cardContent:{
        borderTopLeftRadius: RADIUS,
        borderTopRightRadius: RADIUS,
        height: height * 0.4 *  0.8,
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignItems:'center'
    },
    cardActions:{
        height: height * 0.4 * 0.2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomRightRadius: RADIUS,
        borderBottomLeftRadius: RADIUS,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    actionButton:{

    },
    actionText:{
        color:'white'
    },
});
//Styles

class CardWithActions extends React.Component{

        handlePress = () => {
            alert('Boton presionado');
        }
        
        render(){
            const {children} = this.props;

            return(
                <View style={styles.container}>

                    <View style={styles.cardContent}>
                        {children}
                    </View>
                    <View style={styles.cardActions}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={this.handlePress}
                        >
                            <Icon name="perm-identity" size={45} color="#fff" />

                        </TouchableOpacity>
                        <CardActionSeparator color="white" height={30} />
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={this.handlePress}
                        >
                            <Icon name="headset" size={45} color="#fff" />

                        </TouchableOpacity>
                        <CardActionSeparator color="white" height={30} />
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={this.handlePress}
                        >
                            <Icon name="pin-drop" size={45} color="#fff" />

                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        
    }


export default CardWithActions;
