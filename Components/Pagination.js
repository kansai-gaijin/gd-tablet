import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Pagination extends React.Component {

    handlePageUp = () => {
        let newPage = this.props.page - 1;
        if(newPage != this.props.pages - 1){
            newPage = newPage + 1;
            this.props.changePage(newPage);
        }
    }
    
    handlePageDown = () => {
        let newPage = this.props.page - 1;
        if(newPage != 0){
            newPage = newPage - 1;
            this.props.changePage(newPage);
        }
    }
    
    backDisabled = ()=>{
        let newPage = this.props.page - 1;
        if(newPage == 0) return true

        return false
    }
    
    frontDisabled = ()=>{
        let newPage = this.props.page - 1;
        if(newPage == this.props.pages - 1) return true
        return false
    }

    render() {
        return (
            
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity 
                            disabled={(this.backDisabled()) ? true : false} 
                            activeOpacity={0.2} 
                            onPress={this.handlePageDown} 
                            style={[styles.actionButton, (this.backDisabled()) ? styles.disabled : null]}>
                                <Image style={styles.actionImage} source={require('../assets/back.png')} />
                            </TouchableOpacity>
                    </View>
                    <View style={styles.pagesWrap}>
                        <Text>{this.props.page} / {this.props.pages}</Text>
                    </View>
                    <View>
                        <TouchableOpacity 
                            disabled={(this.frontDisabled()) ? true : false} 
                            activeOpacity={0.2} 
                            onPress={this.handlePageUp} 
                            style={[styles.actionButton, (this.frontDisabled()) ? styles.disabled : null]}>
                                <Image style={styles.actionImage} source={require('../assets/for.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            
        );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'blue',
        width : '100%',
    },
    homeButton : {
        backgroundColor: "#B60000",
        height: 40,
        width: 40,
        justifyContent : 'center',
        alignItems : 'center'
    },
    homeImg : {
        resizeMode: 'contain',
    },
    paginationContainer :{
        flexGrow :1
    },
    actionImage :{
        height : 12,
        width : 8,
        resizeMode: 'contain',
    },
    actionButton : {
        backgroundColor: '#B60000',
        justifyContent : 'center',
        alignItems : 'center',
        height:40,
        width: 40
    },
    pagesWrap : {
        paddingLeft : 50,
        paddingRight : 50
    },
    disabled : {
        opacity : 0.7,
        backgroundColor : '#FFA8A8'
    }
});