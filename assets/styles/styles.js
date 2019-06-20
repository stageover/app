'use strict';

// var React = require('react-native');
import React from 'react';
import { StyleSheet,Platform, } from 'react-native';

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 0,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 0,
    },    
    bannerImage: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: 0,
        height: 228
    },
    categoryContainer:{
        flex: 1,
        marginVertical: 0,
    },
    categoryBox:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    categoryIcons:{
        alignItems : 'center',
        alignSelf: 'center',
        height: 45,
    },
    categoryIconsText:{
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 11
    },
    menuAdsContainer:{
        flex: 1,
        marginVertical: 0,
    },
    menuAdsBox:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 'auto'
    },
    menuAdsImage:{
        alignItems : 'center',
        alignSelf: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: '#ff8d0c',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#ff8d0c',
    },

});
