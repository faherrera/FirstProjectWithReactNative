import React, { Component } from 'react';

//Components
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');
const DEVICE_WIDTH = width;
const DEVICE_HEIGHT = height;

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    logo:{
        width: DEVICE_WIDTH * 0.55,
        height: DEVICE_HEIGHT * 0.1,

    },
    text:{
        color:'#009B3A',
        fontSize:15,
    }
});
const Logo = (props) => (
    <View style={styles.container}>
        <Image source={require('./images/Logo.png')} style={styles.logo}/>
        <Text style={styles.text}>
            v-{props.version}
        </Text>
    </View>
);

export default Logo;