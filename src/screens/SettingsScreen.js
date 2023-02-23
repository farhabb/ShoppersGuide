import { Pressable, Button, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function SettingsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                <MaterialIcons color="#48875E" name='accessibility' size={28}/>
                    <Button 
                    color="#48875E" 
                    title="Accessibility" 
                    onPress={() => navigation.navigate('Accessibility')}/>
                </View>
                <View style={styles.buttons}>
                <MaterialIcons color="#48875E" name='headset' size={28}/>
                    <Button 
                    color="#48875E" 
                    title="Help and Support" 
                    onPress={() => navigation.navigate('HelpandSupport')}/>
                </View>
                <View style={styles.buttons}>
                <MaterialIcons color="#48875E" name='chat' size={28}/>
                    <Button 
                    color="#48875E" 
                    title="Send Feedback"
                    onPress={() => navigation.navigate('SendFeedback')}/> 
                </View>
            </View>  
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons: {
        padding: 30,
        paddingTop: 50,
        color: 'black',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonContainer:{
        alignItems: 'center',
        paddingTop: 50,
    },
});

export default SettingsScreen;