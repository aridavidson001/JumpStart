import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet, Text, View, Modal  } from 'react-native';
import { ColorScheme as CS } from './common/ColorScheme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import SettingsButton from './components/SettingsButton';

const mainIcon = require('./assets/images/icon.png')

export default function App() {
  const [loadedFonts] = useFonts({
    "Bebas": require("./assets/fonts/Bebas/BebasNeue-Regular.ttf"),

    "GeoSans": require("./assets/fonts/GeoSans/GeosansLight.ttf"),
    "GeoSans Italic": require("./assets/fonts/GeoSans/GeosansLight-Oblique.ttf"),

    "Gobold": require("./assets/fonts/Gobold/GoboldRegular.otf"),
    "Gobold Italic": require("./assets/fonts/Gobold/GoboldRegularItalic.otf"),
    "Gobold Bold": require("./assets/fonts/Gobold/GoboldBold.otf"),
    "Gobold Bold Italic": require("./assets/fonts/Gobold/GoboldBoldItalic.otf"),

    "LGC": require("./assets/fonts/LouiseGeorgeCafe/LouisGeorgeCafe.ttf"),
    "LGC Italic": require("./assets/fonts/LouiseGeorgeCafe/LouisGeorgeCafeItalic.ttf"),
    "LGC Light": require("./assets/fonts/LouiseGeorgeCafe/LouisGeorgeCafeLight.ttf"),
    "LGC Light Italic": require("./assets/fonts/LouiseGeorgeCafe/LouisGeorgeCafeLightItalic.ttf"),
    "LGC Bold": require("./assets/fonts/LouiseGeorgeCafe/LouisGeorgeCafeBold.ttf"),
    "LGC Bold Italic": require("./assets/fonts/LouiseGeorgeCafe/LouisGeorgeCafeBoldItalic.ttf"),
});
    // Wait until the fonts are loaded then hide the splash screen
  
  // Close if the fonts can't load
  if (!loadedFonts) {
      return null;
  }



// Close if the fonts can't load


  return (
    
      
      <><View style={styles.headerContainer}>
      <SettingsButton         onPress={() => alert('Settings')}/>

    </View>
      <View style={styles.container}>

        <Text style={styles.text}>Jumpstart</Text>
       
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={mainIcon} />
        </View>
        <Button theme="primary" label="Trick List" />
          <Button theme="routines" label=""/>
        <StatusBar style="auto" />
        </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CS.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    color: CS.accent,
    justifyContent: 'center',
    fontSize: 50,
    fontFamily: "Bebas",

  },
  headerContainer: {
    flex: 1/9,
    direction: 'ltr',
    backgroundColor: CS.backgroundColor,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  settingsButton:{
    marginTop: 15,
    marginLeft: 15,
  },
  footerContainer: {
    flex: 1/9,
    backgroundColor: CS.backgroundColor,
    alignItems: 'flex-end',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },


});
