import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class MenuModal extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>MenuFooter</Text>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
});