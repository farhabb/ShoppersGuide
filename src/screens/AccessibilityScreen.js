import { StyleSheet, Switch, View, Text } from "react-native";
import { useContext, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../styles/themeContext";

function AccessibilityScreen() {
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);
 return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <Text style={[styles.text, {color: theme.color}]}>Theme</Text>
                <Switch
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
    },
});

export default AccessibilityScreen;