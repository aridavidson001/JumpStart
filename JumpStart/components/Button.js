import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {
  if (theme == "primary") {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button]}
          onPress={() => alert('You pressed a button.')}
        >
         
          <Text style={[styles.buttonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.circleButton} onPress={() => 
        alert('You pressed a button.')}>
         <FontAwesome
            name="bars"
            size={40}
            color="#041014"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    button: {
      backgroundColor: "#108ee9",
      color: "#041014",
      borderRadius: 10,

      width: 300,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    circleButton: {
        backgroundColor: '#108ee9',
        width: 80,
        height: 80,
        borderRadius: 80,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonIcon: {
    },
    buttonLabel: {
      color: '#000000',
      fontSize: 40,
    },
  });