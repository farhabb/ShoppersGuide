import { StyleSheet, View, TouchableOpacity, Image, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function FindProductScreen({navigation}) {
  return (
    <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <MaterialIcons style={styles.iconButton} name='settings' size={28}/>
            </TouchableOpacity>
            <Text style={styles.text}>To find Milk at Lidl, follow the directions:</Text>
        <View style={styles.image}>
            <Image source={require('../../assets/shop-floor.png')} style={{width: 280, height: 280}}/>
        </View>
        <TouchableOpacity>
            <View style={styles.speechBtn}>
                <AntDesign name='sound' size={28}/>
            </View>
        </TouchableOpacity>
        <Text style={styles.text}>
        Directions: {'\n'}
        From Entrance {'\n'}
        Pass end of Fruits aisle {'\n'}
        Turn left then right between Snacks and Diary aisle {'\n'}
        Walk up Drinks and Diary aisles {'\n'}
        At the end of the aisle on your right is Milk {'\n'}
        </Text>
        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Found it!</Text>
            </Pressable>
            <Text style={styles.smallText}>Did not find it</Text>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white',
    },
    iconButton: {
        padding: 5,
        alignSelf:'flex-end',
    },
    image: {
       alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 5,
        fontSize: 14,
    },
    smallText: {
        fontSize: 12,
        alignSelf: 'center',
        padding: 3,
    },
    button: {
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#9CCAC4',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    speechBtn: {
        padding: 10,
        alignSelf: 'flex-end'
    },
});

export default FindProductScreen;