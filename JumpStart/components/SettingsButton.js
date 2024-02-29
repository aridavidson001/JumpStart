import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ColorScheme as CS } from '../common/ColorScheme';

export default function SettingsButton({onPress}) {


    return (

        <View style={[styles.settingsButtonContainer]}>
            <Pressable       onPress={onPress}>
      <FontAwesome name="gear" size={40} color={CS.buttonColor}/>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({



  settingsButtonContainer: {
    alignItems: 'ltr',
    justifyContent: 'center',
    padding: 20,
  },
    buttonLabel: {
      color: CS.accent,
      fontSize: 40,
    },
  });