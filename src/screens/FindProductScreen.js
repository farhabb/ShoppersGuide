import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function FindProductScreen() {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <View>
                <MaterialIcons style={styles.iconButton} name='settings' size={28}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({});

export default FindProductScreen;