import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Slider,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';
import {  StackActions, NavigationActions  } from 'react-navigation';

var styles = require('../assets/styles/styles');

import { MonoText } from '../components/StyledText';
import Search from '../layouts/Search/Search';
import BannerCarousel from '../layouts/BannerCarousel/BannerCarousel';
import CategoryIcon from '../layouts/CategoryIcon/CategoryIcon';
import MenuAds from '../layouts/MenuAds/MenuAds';



export default function HomeScreen() {
    return ( 
            <View style = { styles.container } >
                <ScrollView style = { styles.container } contentContainerStyle = { styles.contentContainer } >
                    <Search/>
                    <BannerCarousel/>
                    <CategoryIcon/>
                    <MenuAds/>
                    <Text>Home Screen</Text>
                    <Button
                      title="Go to Category"
                      onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                          index: 0,
                          actions: [
                            NavigationActions.navigate({ routeName: 'Category' })
                          ],
                        }))
                      }}
                    />
                </ScrollView>
            </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,   
};

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = ( <Text onPress = { handleLearnMorePress } style = { styles.helpLinkText } >Learn more </Text>
        );

        return ( <Text style = { styles.developmentModeText } >Development mode is enabled: your app will be slower but you can use useful development tools. { learnMoreButton } </Text>
        );
    } else {
        return ( <Text style = { styles.developmentModeText } >You are not in development mode: your app will run at full speed. </Text>
        );
    }
}

