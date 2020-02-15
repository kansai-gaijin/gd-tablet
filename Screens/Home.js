import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const links = [
    {
        title: 'テーブル\nオープン',
        link: 'OpenTable'
    },
    {
        title: '追加オーダー',
        link: 'NewOrder'
    },
    {
        title: 'オーダー\n変更',
        link: 'OrderChangeTable'
    },
    {
        title: 'オーダー\nキャンセル',
        link: 'OrderCancelTable'
    },
    {
        title: 'テーブル移動',
        link: 'TableMove'
    },
    {
        title: 'テーブル合算',
        link: 'TableMerge'
    }
];

export default class Home extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={require('../assets/logo-large.png')} />
                </View>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('Food')}>
                        <View style={styles.action}>
                            <Image style={styles.actionImage} source={require('../assets/food.png')} />
                            <View style={styles.actionBody}>
                                <Text style={styles.actionText}>フード メニュー</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('Drinks')}>
                        <View style={styles.action}>
                            <Image style={styles.actionImage} source={require('../assets/drinks.png')} />
                            <View style={styles.actionBody}>
                                <Text style={styles.actionText}>ドリンク メニュー</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('Osusume')}>
                        <View style={styles.action}>
                            <Image style={styles.actionImage} source={require('../assets/susume.png')} />
                            <View style={styles.actionBody}>
                                <Text style={styles.actionText}>おすすめ メニュー</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.otherButton}>
                        <View style={styles.other}>
                            <Image style={styles.otherImage} source={require('../assets/icon-bill.png')} />
                            <Text style={styles.otherText}>店員を{"\n"}呼ぶ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherButton}>
                        <View style={styles.other}>
                            <Image style={styles.otherImage} source={require('../assets/icon-bill.png')} />
                            <Text style={styles.otherText}>注文{"\n"}確認</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherButton}>
                        <View style={styles.other}>
                            <Image style={styles.otherImage} source={require('../assets/icon-bill.png')} />
                            <Text style={styles.otherText}>会計</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
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
    logo : {
        flex : 3,
        paddingTop: 20,
        height : 500,
        flexDirection : 'row',
        justifyContent : 'center',
    },
    
    actions : {
        flex: 3,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    bottomNav : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
    },
    
    logoImage : {
        resizeMode: 'contain',
        height : '100%',
    },

    action : {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 3, // Android
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    actionButton : {
        flex: 1,
        margin : 20,
    },
    actionImage : {
        width: '100%',
        height : 100,
    },
    actionText : {
        fontSize : 15,
        textAlign : 'center',
    },
    actionBody : {
        padding: 20
    },
    otherButton : {
        margin : 10
    },
    other :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor : '#B60000',
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 10,
        paddingBottom : 10
    },
    otherImage : {
        marginRight : 10,
        height: '100%',
        resizeMode: 'contain',
    },
    otherText :{
        fontSize : 18,
        color : 'white',
    }
});