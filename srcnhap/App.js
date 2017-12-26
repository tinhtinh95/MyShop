import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

export default class App extends Component {
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })
  
  componentDidMount(){
    // _showModal
    // alert('ahihi')
}
  render () {
    
    return (
      <View style={{ flex: 1 }}>
        {/* <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity> */}
        <View  style={{width:100, height:100}}>
        <Modal isVisible={true}>
          <View style={{ width:100, height:100,backgroundColor:'yellow'}}>
            <Text>Hello!</Text>
          </View>
        </Modal>
        </View>
      </View>
    )
  }

}