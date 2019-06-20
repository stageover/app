import React, { Component } from 'react';
import { Text, View, Dimensions, Image, ActivityIndicator, Button, BackHandler } from 'react-native';

var styles = require('../../assets/styles/styles');

class BackButton extends Component {
	constructor(props) {
		super(props);
	    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}

	componentWillMount() {
	    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
	    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	handleBackButtonClick() {
	    this.props.navigation.goBack(null);
	    return true;
	}

	render() {
		    return (
		       <Button
		        onPress={() => this.handleBackButtonClick()}
		        title="Info"
		        color="#fff"
		      />
		    );
	}
}

export default BackButton;
