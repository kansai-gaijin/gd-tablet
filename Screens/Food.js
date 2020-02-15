import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//COMPS

import MenuHeader from '../Components/MenuHeader';
import MenuGrid from '../Components/MenuGrid';
import MenuFooter from '../Components/MenuFooter';
import OrderList from '../Components/OrderList';

const categories = [
    {
      name : "揚げ物",
      pages : [
          {
            rowItems : 3,
            items : ["Ju3h7psDSzqLQ7GEY","XTxMxbc7ZbyTZctLr","yzWbr4TFETomKKtrT","pkpw2i96qougnZoz6","2M9MNxJg69xg6xs4C","ALaEv57mhBbcr4uPh"]
          },
          {
            rowItems : 2,
            items : ["83oM6YMQgtNCvKACS","DczBtmw5op2jLSHHB","T8kzchq9mZoP2yKn3","qsBu2hht7yWZtAqnb"]
          }
      ]
    },
    {
      name : "焼き物",
      pages : [
          {
            rowItems : 3,
            items : ["j84sFdb92aBvQTvQS","LWPL6m7khvjKhBt63","Dob8whk4cdFeXAR3W","zhTYnYaT6piArJvpn","PKF8zq8my5ruTY3Cx","D7KSsFxcvZAnqPvFE"]
          },
          {
            rowItems : 2,
            items : ["g3seZxZFM2iwT4Eaa","9ckDfJ6WzWWiMi4FF","WkksZHdasbyLLnJvw"]
          }
      ]
    },
]

export default class Food extends React.Component {
    
    state = {
        currentCat : 0,
        currentPage : 0,
        orderItems : []
    }
    
    handleCatChange = (cat)=>{
        
        this.setState({
            currentCat : cat,
            currentPage : 0,
        });
        
    }
    
    handlePageChange = (page) => {
        this.setState({
            currentPage : page
        });
    }
    
    addOrderItem = (item) => {
        let items = this.state.orderItems;
        items.push(item);
        this.setState({orderItems : items});
    }

    render() {
        return (
            <View style={styles.menuContainer}>
                <View style={styles.menuArea}>
                    <MenuHeader title="料理" categories={categories} currentCat={this.state.currentCat} changeCat={this.handleCatChange}/>
                    <MenuGrid changePage={this.handlePageChange} category={categories[this.state.currentCat]} currentPage={this.state.currentPage} addOrderItem={this.addOrderItem} />
                    <MenuFooter changePage={this.handlePageChange} goHome={() => this.props.navigation.popToTop()} page={this.state.currentPage + 1} pages={categories[this.state.currentCat].pages.length} />
                </View>
                <View style={styles.billArea}>
                    <OrderList order={this.state.orderItems} />
                </View>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    menuArea :{
        flex: 9,
        flexDirection : 'column'
    },
    billArea :{
        flex : 3,
        justifyContent : 'center',
        alignItems : 'center',
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
    }
});