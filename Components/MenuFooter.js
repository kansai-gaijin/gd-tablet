import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Pagination from './Pagination';

export default class MenuFooter extends React.Component {

    render() {
        return (
            
                <View style={styles.container}>
                    <View style={styles.buttonContaner}>
                        <TouchableOpacity onPress={this.props.goHome} style={styles.homeButton}>
                            <Image style={styles.homeImg} source={require('../assets/home.png')} />
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.paginationContainer}>
                        <Pagination page={this.props.page} pages={this.props.pages} changePage={this.props.changePage} />
                    </View>
                </View>
            
        );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width : '100%',
        flexDirection : 'row',
    },
    homeButton : {
        backgroundColor: "#B60000",
        height: 40,
        width : 40,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 3
    },
    buttonContaner : {
        height : 40,
        width : 40,
        backgroundColor : 'blue'
    },
    homeImg : {
        resizeMode: 'contain',
    },
});