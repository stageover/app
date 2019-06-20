import React, { Component } from 'react';
import { Text, View, Dimensions, Image, ActivityIndicator, StyleSheet } from 'react-native';

import FlexImage from 'react-native-flex-image';

var styles = require('../../assets/styles/styles');

const { width } = Dimensions.get('window')

class CategoryIcon extends Component {

	constructor(props) {
		super(props);

		this.state = {
		  size: {width},
		  image: [
				{ key:0,image: require('../../assets/images/menu-ads/1.jpg'),}, 
				{ key:1,image: require('../../assets/images/menu-ads/2.jpg'),}, 
				{ key:2,image: require('../../assets/images/menu-ads/3.jpg'),}, 
		  ]
		};
	}

	_onLayoutDidChange = e => {
	const layout = e.nativeEvent.layout;
	this.setState({ size: { width: layout.width, height: layout.height } });
	};
	
	render() {
		    return (
	    		<View style={styles.menuAdsBox}>
			        <FlexImage
			        		
			            	style={[styles.menuAdsImage,this.state.size]}
					        source={this.state.image[0].image}
					        thumbnail={this.state.image[0].image}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					/>
					<FlexImage
			        		
			            	style={[styles.menuAdsImage,this.state.size]}
					        source={this.state.image[1].image}
					        thumbnail={this.state.image[1].image}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					/>
					<FlexImage
			        		
			            	style={[styles.menuAdsImage,this.state.size]}
					        source={this.state.image[2].image}
					        thumbnail={this.state.image[2].image}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					/>
				</View>
		    );
	}
}

export default CategoryIcon;