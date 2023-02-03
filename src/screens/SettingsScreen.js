import { Pressable, Button, StyleSheet, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function SettingsScreen({navigation}) {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
            <MaterialIcons style={styles.iconButton} name='accessibility' size={28}/>
                <Button 
                color="black" 
                title="Accessibility" 
                onPress={() => navigation.navigate('Accessibility')}/>
            </View>
            <View style={styles.buttons}>
            <MaterialIcons style={styles.iconButton} name='headset' size={28}/>
                <Button 
                color="black" title="Help and Support" 
                onPress={() => navigation.navigate('HelpandSupport')}/>
            </View>
            <View style={styles.buttons}>
            <MaterialIcons style={styles.iconButton} name='chat' size={28}/>
                <Button 
                color="black" 
                title="Send Feedback"
                onPress={() => navigation.navigate('SendFeedback')}/> 
            </View>
        </View>    
    );
}

const styles = StyleSheet.create({
    buttons: {
        padding: 30,
        paddingTop: 50,
        color: 'black',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonContainer:{
        alignItems: 'center',
        paddingTop: 50,
    },
    iconButton: {

    }
});

export default SettingsScreen;