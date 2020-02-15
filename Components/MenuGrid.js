import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ViewPagerAndroid } from 'react-native';

import MenuGridPage from './MenuGridPage';

export default class MenuGrid extends React.Component {
    
    state = {
        page : 0
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.page != this.props.currentPage){
           this.pageChanged(this.props.currentPage);
           this.viewPager.setPage(this.props.currentPage);
           this.setState({page: this.props.currentPage})
           console.log(this.state.page);
       }
    }
          
    pageChanged = (event) => {
        if(event){
            if(event.nativeEvent){
               this.setState({page : event.nativeEvent.position});
                this.props.changePage(event.nativeEvent.position); 
            }
        }
    }
    
    loadGrid = () => {
        
        let cats = [];
        
        if(this.props.category.pages.length > 0){
            for(let i = 0; i < this.props.category.pages.length; i++){
                cats.push(<View style={styles.pageContainer} key={i}><MenuGridPage addOrderItem={this.props.addOrderItem} page={this.props.category.pages[i]}  /></View>);
            }
            return cats;
        }else{
            return (<View style={styles.pageContainer}><Text>LOADING</Text></View>);
        }
    }
    
    

    render() {
        return (
            <View style={styles.container}>
                
                <ViewPagerAndroid ref={(viewPager) => {this.viewPager = viewPager}} style={styles.viewPager} initialPage={this.state.page} onPageSelected={this.pageChanged}>
                    {this.loadGrid()}
                </ViewPagerAndroid>
            </View>
        );
    }
    
    
}

const styles = StyleSheet.create({
    container : {
        flexGrow : 1,
    },
    viewPager : {
        flex:1
    }
});