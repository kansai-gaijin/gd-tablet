import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class OrderList extends React.Component {
    
    state = {
        order : this.props.order
    }
    
    keyExtractor = (item, index) => index.toString();
    
    renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        style={styles.listItem}
      />
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.orderListHeader}>
                    <Text style={styles.orderListHeaderText}>現在のご注文</Text>
                </View>
                <View style={styles.orderListBody}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.order}
                        renderItem={this.renderItem}
                        extraData={this.state}
                        key={this.state.order}
                    />
                </View>
                <View style={styles.orderListFooter}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>注文を送信する</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:'100%',
        width:'100%'
    },
    orderListBody : {
        backgroundColor: 'white',
        flex : 10
    },
    orderListHeader : {
        backgroundColor: 'black',
        flex : 1,
        alignItems : 'center',
        justifyContent: 'center'
    },
    orderListHeaderText : {
        color : 'white',
        fontSize : 16,
        textAlign: 'center'
    },
    orderListFooter : {
        flex:1
    },
    listItem : {
        borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    },
    button : {
        height: "100%",
        width: "100%",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor: '#B60000'
    },
    buttonText : {
        color: 'white'
    }
    
});