import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const mainIcon = require('./assets/images/icon.png')
export default function App() {
  return (
      <>

      <View style={styles.headerContainer}>
      <FontAwesome name="gear" size={40} color="#ffff" style={styles.settingsButton}/>
      </View>
      
     
      <View style={styles.container}>

        <Text style={styles.text}>Jumpstart</Text>
        <View style={styles.imageContainer}>

          <ImageViewer placeholderImageSource={mainIcon} />
        </View>
        <Button theme="primary" label="Trick List" />
          <Button theme="circle" label=""/>
        <StatusBar style="auto" />
    
        </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040e14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    color: '#ffff',
    justifyContent: 'center',
    fontSize: 50,
  },
  headerContainer: {
    flex: 1/9,
    direction: 'ltr',
    backgroundColor: '#040e14',
    justifyContent: 'flex-start',
    alignContent: 'flex-start', 
  },
  settingsButton:{
    marginTop: 15,
    marginLeft: 15,
  },
  footerContainer: {
    flex: 1/9,
    backgroundColor: '#040e14',
    alignItems: 'flex-end',
  },

});
