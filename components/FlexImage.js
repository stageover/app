import FlexImage from 'react-native-flex-image';

function App() {
  return (
    <View style={{flex: 1}}>
      <FlexImage
        source={{
          uri: 'image source uri',
        }}
        thumbnail={{uri: 'thumbnail image source uri'}}
        loadingMethod="progressive"
      />
    </View>
  );
}