import React,{Component} from 'react';
import {  View,StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../redux/actionCreators';

class Filter extends Component{
   
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.props.getData()}>
                     <Text>{this.props.myKey ? 'SHow': 'not'}</Text>
                </TouchableOpacity>
               
            </View> 
        )
    }
}
const styles=StyleSheet.create
({
    container:{
        flex:1,flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white',
    },
    buttonText:{
        color:'red',
    }
});

function mapState(state){
return {myKey: state.reducerEmploye.isTrue}
}
export default connect(mapState,{getData})(Filter);