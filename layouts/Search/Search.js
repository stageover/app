import React, { Component } from 'react';
import { Text, View, Dimensions, Image, ActivityIndicator, StyleSheet } from 'react-native';

var styles = require('../../assets/styles/styles');

const { width } = Dimensions.get('window');

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  size: {width,height:228},
		};
	}

	_onLayoutDidChange = e => {
	const layout = e.nativeEvent.layout;
	this.setState({ size: { width: layout.width, height: layout.height } });
	};

	render() {
		    return (
		        <View style={searchStyle.searchBox} onLayout={this._onLayoutDidChange}>

		        </View>
		    );
	}
}

export default Search;

const searchStyle = StyleSheet.create({
	searchBox: {
		position: 'absolute',
		top: 30,
		left: 10,
		zIndex: 1 ,
		height: 35,
		width: '95%',
		backgroundColor: 'white',
	}
});