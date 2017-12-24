//Components
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

//UI
    import{
        View,
        Text,
        TouchableOpacity,
        StyleSheet,

    } from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        width:'40%',
        // backgroundColor:'coral'
        marginTop:15

    },
    button:{
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        width:'100%'
    },
    label:{
        fontSize:15,
        color:'#FFF'
    }
});

const GradientButton = (props) => {
    const { buttonLabel, onPress, height, width } = props;
    
    const containerStyle = [styles.container];
    containerStyle.push({
        height,
        width: width+"%",
    });

    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
            <LinearGradient 
                start={{x:0.0,y:1.0}} //Objeto de coordenadas, recibe donde empieza
                end={{ x: 1, y: 0 }} //Objeto de coordenadas, recibe donde Termina.
                style={styles.button}
                colors={['#069556','#00756d','#005C82']} //Array de colores, los que tomará el gradiente.
                locations={[0.2,0.5,1]}  //Array de posiciones o stop donde pasarán los colores.
                
            >       
                <Text style={styles.label}> 
                    {buttonLabel}
                </Text> 
            </LinearGradient>        
        </TouchableOpacity>

    )
};

export default GradientButton;