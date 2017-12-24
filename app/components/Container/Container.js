import React from 'react';
import { View,StyleSheet,Image,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

const DEVICE_WIDTH = width;
const DEVICE_HEIGHT = height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: DEVICE_HEIGHT,
        width: DEVICE_WIDTH,
    }
});
const Container = ({children}) => (
    <View style={styles.container}>
        <Image
            style={styles.background}
            resizeMode="cover"
            source={require('./images/back.jpg')}
        />
        {children}
    </View>
);

export default Container;