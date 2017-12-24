import React, { Component } from 'react';

//Components
    
    import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';
//UI
    //ICONS
    import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width,height} = Dimensions.get('window');
const DEVICE_WIDTH = width;
const DEVICE_HEIGHT = height;

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'coral'

    },
    versionText:{
        color:'#DBDBDB',
        fontSize:15,
        // alignSelf:'flex-end'
    },
    logoText:{
        color:'lightblue',
        fontSize:40,
        paddingHorizontal:10
    },
    
});
const Logo = (props) => (
    <View style={styles.container}>
        <MaterialCommunityIcons
            name="church"
            color="#DBDBDB"
            size={40}
        />
        <Text style={styles.logoText}>
            COLALAPP
        </Text>
        <Text style={styles.versionText}>
            v-{props.version}
        </Text>
    </View>
);

export default Logo;