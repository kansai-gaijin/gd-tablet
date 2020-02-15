import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GridList from 'react-native-grid-list';

import MenuGridItem from './MenuGridItem';

export default class MenuGridPage extends React.Component {
    
    keyExtractor = (item, index) => index.toString();
    
    state = {
        pageData : this.props.page,
        columnCount : this.props.page.rowItems
    }

    renderItem = ({ item, index }) => (
            <MenuGridItem addOrderItem={this.props.addOrderItem} prod={item} />
    );
    
    render() {
        return (
            <View style={styles.gridListContainer}>
                <GridList
                  data={this.props.page.items}
                  numColumns={this.props.page.rowItems}
                  renderItem={this.renderItem}
                  extraData={this.state}
                  style={styles.gridList}
                  key={this.props.page.items}
                />
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    gridListContainer : {
        height:'100%',
        width:'100%',
    },
    gridList : {
    }
});