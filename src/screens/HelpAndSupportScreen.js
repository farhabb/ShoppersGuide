import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import React, { useContext } from "react";
import themeContext from "../../styles/themeContext";

function HelpAndSupportScreen() {
    const theme = useContext(themeContext);

    const speech = () => {
        const theText = `FAQs How do you use the app? 
                    Search the store you are shopping at from the list of 
                    participating retailers. 
                    Select the participating store by city and address and select the
                    the product you are looking for.
                    Click the search button to generate a map of the shop
                    floor with directions to the product.
                    If you found your product, click the 'found it' button and you can search for
                    another product. 
                    If you couldn't find it, let us know and we'll sort it.
                    Do I need an account to use the app?
                    No, there is no need to sign up or log in to use the app at this time.
                    Can I turn on text to speech?
                    Yes, if you click the wheel in the corner and select 
                    'Accessibility', you can turn on audio and adjust the 
                    volume.`;
        const options = {
            voice: "com.apple.speech.synthesis.voice.Fred",
            pitch: 1.5,
            rate: 0.7 };
        Speech.speak(theText, options);
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <Text style={styles.title}>FAQs</Text>
            <Text style={styles.subHeading}>How do you use the app?</Text>
            <Text style={styles.text}>
                Search the store you are shopping at from the list of 
                participating retailers. 
                Select the participating store by city and address and select the
                the product you are looking for.
                Click the search button to generate a map of the shop
                floor with directions to the product.
                If you found your product, click the 'found it' button and you can search for
                another product. 
                If you couldn't find it, let us know and we'll sort it.
            </Text>
            <Text style={styles.subHeading}>Do I need an account to use the app?</Text>
            <Text style={styles.text}>
                No, there is no need to sign up or log in to use the app at this time.
            </Text>
            <Text style={styles.subHeading}>Can I turn on text to speech?</Text>
            <Text style={styles.text}>
                Yes, if you click the wheel in the corner and select 
                'Accessibility', you can turn on audio and adjust the 
                volume.
            </Text>
            <TouchableOpacity onPress={speech}>
                <View style={styles.speechBtn}>
                   <AntDesign name='sound' size={28}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        padding: 10,
    },
    subHeading: {
        fontSize: 17,
        alignSelf: 'flex-start',
        padding: 5,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 17,
        alignSelf: 'flex-start',
        padding: 5,
    },
    speechBtn: {    
        padding: 20,
        alignSelf: 'flex-end'
    },
});

export default HelpAndSupportScreen;