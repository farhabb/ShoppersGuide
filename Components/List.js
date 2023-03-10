import { View, StyleSheet, Text } from "react-native";

const List = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}> </View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15, 
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'green',
        opacity: 0.4,
        borderRadius: 5, 
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circle: {
        width: 12, 
        height: 12, 
        borderColor: 'black',
        borderWidth: 2, 
        borderRadius: 5, 
    },
});

export default List;