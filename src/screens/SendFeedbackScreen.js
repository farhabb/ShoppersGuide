import { StyleSheet, TextInput, ScrollView, Text, Pressable, View } from "react-native";
import { useState } from "react";

function SendFeedbackScreen() {
    const [value, onChangeText] = useState("");

    return (
        <ScrollView style={styles.container}>
            <TextInput
            editable={true}
            multiline={true}
            numberOfLines={10}
            maxLength={50}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.input}
            placeholder={"I could not find this product can you please help me."}
            />
            <View style={{padding: 10}}>
            <Pressable style={styles.button}>
                <Text>Send</Text>
            </Pressable>
            <Text style={styles.text}>You can show this to a staff member so they can you out!</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        paddingHorizontal: 10,
        height: 300,
        textAlignVertical: 'top',
        paddingTop: 10,
        fontSize: 17,
    },
    text: {
        fontSize: 11,
        alignSelf: 'center',
        padding: 5,
        paddingTop: 190,
    },
    button: {
        alignSelf: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: '#9CCAC4',
    },
});

export default SendFeedbackScreen;