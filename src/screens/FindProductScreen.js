import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


function FindProductScreen() {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <MaterialIcons style={styles.iconButton} name='settings' size={28}/>
        </TouchableOpacity>
        <View style={styles.image}>
            <Image source={require('../../assets/shop-floor.png')} style={{width: 280, height: 280}}/>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    iconButton: {
        padding: 5,
        alignSelf:'flex-end',
    },
    image: {
       alignSelf: 'center',
    },
});

export default FindProductScreen;