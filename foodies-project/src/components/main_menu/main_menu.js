import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Button, Divider } from 'react-native-elements'; // 0.16.0
import Icon from 'react-native-vector-icons/Ionicons'; // 4.2.0
import ActionButton from 'react-native-action-button'; // 2.7.2

import '@expo/vector-icons'; // 5.1.0

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          borderRadius={2} //UNEXPECTED BEHAVIOR
          buttonStyle={styles.button}
          backgroundColor='#EB642C'
          title="FIND RECIPES"
        />
        <Divider style={{ height: 60 }} />
        <Button
          borderRadius={2}
          containerViewStyle={{ borderRadius: 2 }} //MUST BE SET
          backgroundColor='#EB642C'
          buttonStyle={styles.button}
          title="HISTORY"
        />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Account"
            onPress={() => console.log('notes tapped!')}>
            <Icon name="account" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Logout"
            onPress={() => {}}>
            <Icon
              name="logout"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FF9797',
    fontSize: 100,
  },
  
  button:{
  textAlign: 'center',
	color: 'black',
	fontSize: 100
	,height: 150, 
	width: 250 
  },
  
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});