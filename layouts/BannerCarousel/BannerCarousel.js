import React, { Component } from 'react';
import { Text, View, Dimensions, Image, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-looped-carousel';

var styles = require('../../assets/styles/styles');
import FlexImage from 'react-native-flex-image';

const { width } = Dimensions.get('window');

class BannerCarousel extends Component {
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
		        <View style={{ flex: 1, flexDirection:'column',}} onLayout={this._onLayoutDidChange}>
		          <Carousel
		            delay={5000}
		            style={{height: 228, width: '100%',}}
		            autoplay
		            bullets
		            currentPage={0}
		            onAnimateNextPage={p => console.log(p)}>
			              <FlexImage
			            	style={[this.state.size,styles.bannerImage]}
					        source={require('../../assets/images/banner-slider/1.jpg')}
					        thumbnail={require('../../assets/images/banner-slider/1.jpg')}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					      />
					      <FlexImage
			            	style={[this.state.size,styles.bannerImage]}
					        source={require('../../assets/images/banner-slider/2.jpg')}
					        thumbnail={require('../../assets/images/banner-slider/2.jpg')}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					      />
					      <FlexImage
			            	style={[this.state.size,styles.bannerImage]}
					        source={require('../../assets/images/banner-slider/3.jpg')}
					        thumbnail={require('../../assets/images/banner-slider/3.jpg')}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					      />
					      <FlexImage
			            	style={[this.state.size,styles.bannerImage]}
					        source={require('../../assets/images/banner-slider/4.jpg')}
					        thumbnail={require('../../assets/images/banner-slider/4.jpg')}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					      />
					      <FlexImage
			            	style={[this.state.size,styles.bannerImage]}
					        source={require('../../assets/images/banner-slider/5.jpg')}
					        thumbnail={require('../../assets/images/banner-slider/5.jpg')}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					      />
					      <FlexImage
			            	style={[this.state.size,styles.bannerImage]}
					        source={require('../../assets/images/banner-slider/6.jpg')}
					        thumbnail={require('../../assets/images/banner-slider/6.jpg')}
					        loadingMethod="progressive"
					        loadingComponent={<ActivityIndicator size="large" color="red" />}
					      />
			            
		          </Carousel>
		        </View>
		    );
	}
}

export default BannerCarousel;
