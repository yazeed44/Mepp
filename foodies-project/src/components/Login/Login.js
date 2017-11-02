import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<View style={styles.logoContainer}>
				<Image 
					style={styles.logo}
					source={require('../../components/images/sandwhich.png')} 
					/>					
					<Text style={styles.title}>Placeholder Image and Description</Text>
			</View>
			<View style={styles.formContainer}>
				<LoginForm />
			</View>
		  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C97143',
  },
  logoContainer: {
	alignItems: 'center',
	flexGrow: 3,
	justifyContent: 'center'
  },
  logo: {
	 width: 300,
	 height: 170
  },
  title: {
	color: '#FFF',
	marginTop: 20
  }
});

