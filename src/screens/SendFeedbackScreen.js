import { StyleSheet, TextInput, ScrollView } from "react-native";
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
            placeholder={"I could not find this product can you please help me"}
            />
            <Text>You can show this to a staff member so they can you out</Text>
            <Pressable>
                <Text style={styles.Searchtext}>Send</Text>
            </Pressable>
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
        fontSize: 17

    }
});

export default SendFeedbackScreen;