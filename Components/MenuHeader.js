import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class MenuHeader extends React.Component {

    isSelected = (index)=>{
        if(this.props.currentCat == index){ return true}
        else {return false}
    }
    
    render() {
        
        return (
            <View style={styles.menuHeader}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.headerLogo} source={require('../assets/logo-small.png')} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>{this.props.title}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    {
                        this.props.categories.map((item, i) => (
                            <TouchableOpacity style={styles.button} key={i} onPress={()=>this.props.changeCat(i)}>
                                <View style={[styles.buttonInner, (this.isSelected(i)) ? styles.selected : null]}>
                                    <Text style={styles.buttonText}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection : 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer : {
    },
    headerLogo : {
        resizeMode: 'contain',
    },
    headerText : {
        flexGrow: 1,
    },
    headerTitle : {
        textAlign : 'center',
        fontSize : 15,
        fontWeight : 'bold'
    },
    buttonContainer : {
        flexDirection : "row",
    },
    button : {
        flexGrow : 1,
    },
    buttonInner :{
        padding: 10,
        backgroundColor: '#B60000'
    },
    buttonText :{
        textAlign : 'center',
        color: 'white'
    },
    selected : {
        backgroundColor : '#670000'
    }
});