import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const mainIcon = require('./assets/images/icon.png')
export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Jump Start</Text>
      <View style={styles.imageContainer}>

      <ImageViewer placeholderImageSource={mainIcon} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme = "primary" label="Trick List" />
        <View> 
        </View>
        <Button theme="circle" label="" />
      </View>
      <StatusBar style="auto" />
    </View>
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

});
