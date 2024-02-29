import { StyleSheet, View, Pressable, Text, Image, Modal, useState } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ColorScheme as CS } from '../common/ColorScheme';

export default function Button({ label, theme }) {

  if (theme == "primary") {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable style={[styles.button]} 
        onPress={() => alert('You pressed a button.')}>
          <Text style={[styles.buttonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  if (theme == "settings") {
    return (

        <View style={[styles.settingsButtonContainer]}>

       
            <Pressable       onPress={() => setModalVisible(!modalVisible)}>

      <FontAwesome name="gear" size={40} color={CS.buttonColor}/>

            </Pressable>
        </View>
    )
  }
  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.circleButton} onPress={() => 
        alert('You pressed a button.')}>
            <FontAwesome name="bars" size={40} color={CS.accent}/>

         
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({

    buttonContainer: {
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    button: {
      backgroundColor: CS.buttonColor,
      color: CS.buttonText,
      borderRadius: 20,

      width: 300,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    circleButton: {
        backgroundColor: CS.buttonColor,
        width: 80,
        height: 80,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLabel: {
      color: CS.accent,
      fontSize: 40,
    },
  });