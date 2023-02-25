import { StyleSheet, Switch, View, Text } from "react-native";
import { useContext, useState } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../styles/themeContext";
import Slider from '@react-native-community/slider';

function AccessibilityScreen() {
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);
 return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <Text style={[styles.text, {paddingBottom: 15}, {color: theme.color}]}>Display Theme</Text>
                <Switch
                value={darkMode}
                backgroundActive={'#48857E'}
                backgroundInactive={'gray'}
                activeText={'On'}
                inActiveText={'Off'}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }}
                />
            <Text style={[styles.text, {paddingBottom: 15}]}>Text-to-Speech Audio</Text>
            <Switch
                value={false}
                onValueChange={(val) => console.log(val)}
                disabled={false}
                activeText={'On'}
                inActiveText={'Off'}
            />
            <Text style={styles.text}>Volume</Text>
            <Slider
                style={{width: 260, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#48857E"
                maximumTrackTintColor="#000000"
            />
            <Text style={styles.text}>Text Size</Text>
            <Slider
                style={styles.sliders}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#48857E"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textContainer}>
                <Text style={styles.smallA}>A</Text>
                <Text style={styles.bigA}>A</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 30,
        fontSize: 20,
    },
    sliders: {
        width: 260, 
        height: 40,
        paddingTop: 50, 
    },
    textContainer: {
        flexDirection: 'row',
    },
    smallA: {
        fontSize: 15,
        paddingEnd: 115,
    },
    bigA: {
        fontSize: 25,
        paddingStart: 115,
    },
});

export default AccessibilityScreen;