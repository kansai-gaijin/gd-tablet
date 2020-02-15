import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

class GridItem extends React.Component {
    
    render() {
        return (
            <TouchableOpacity onPress={()=>this.props.addOrderItem(this.props.product[0])}>
                <Card
                    containerStyle={styles.card}
                    image={{ uri: this.props.product[0].image}}
                    >
                    <Text>{this.props.product[0].name}</Text>
                </Card>
            </TouchableOpacity>
        );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    cardImage:{
        height:100
    },
    card : {
        margin:3,
        padding:0
    }
});

const elWithTracker = withTracker(params => { 
  return {
      product : Meteor.collection('products').find({_id : params.prod}),
  }
})(GridItem);


export default elWithTracker;