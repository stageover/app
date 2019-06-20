import React, { Component } from 'react';
import { Text, View, Dimensions, Image, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import FlexImage from 'react-native-flex-image';

var styles = require('../../assets/styles/styles');

const { width } = Dimensions.get('window');

const numColumns = 4;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

class CategoryIcon extends Component {

	constructor(props) {
		super(props);

		this.state = {
		  size: {width,height:270},
		  image: [
				{ key:0,icons: require('../../assets/images/category-icons/bike.png'), caption: 'Bike Shop' }, 
				{ key:1,icons: require('../../assets/images/category-icons/car.png'), caption: 'Automotive Parts' }, 
				{ key:2,icons: require('../../assets/images/category-icons/heavy-equipment.png'), caption: 'Heavy Equipments' }, 
				{ key:3,icons: require('../../assets/images/category-icons/industrial.png'), caption: 'Industrial Supplies' }, 
				{ key:4,icons: require('../../assets/images/category-icons/motorcycle.png'), caption: 'Motorcycle Parts' }, 
				{ key:5,icons: require('../../assets/images/category-icons/safety.png'), caption: 'Safety & Protection' }, 
				{ key:6,icons: require('../../assets/images/category-icons/tool.png'), caption: 'Tools' }, 
				{ key:7,icons: require('../../assets/images/category-icons/truck.png'), caption: 'Truck Parts' },
		  ]
		};
	}

	_onLayoutDidChange = e => {
	const layout = e.nativeEvent.layout;
	this.setState({ size: { width: layout.width, height: layout.height } });
	};

	renderItem = ({ item, index }) => {
	    return (
	        <View style={[styles.categoryBox,ss.dh]}>
		        <FlexImage
		        		
		            	style={styles.categoryIcons}
				        source={this.state.image[index].icons}
				        thumbnail={this.state.image[index].icons}
				        loadingMethod="progressive"
				        loadingComponent={<ActivityIndicator size="large" color="red" />}
				/>
				<Text style={styles.categoryIconsText}>{item.caption}</Text>
			</View>
	    );
	  };
	
	render() {
		    return (
	    		<FlatList
			        data={formatData(this.state.image, numColumns)}
			        style={styles.categoryContainer}
			        renderItem={this.renderItem}
			        numColumns={numColumns}
			     />	
		    );
	}
}


const ss = StyleSheet.create({
  dh: {
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
});

export default CategoryIcon;