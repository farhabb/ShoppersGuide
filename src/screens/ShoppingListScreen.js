import { View, Text, StyleSheet, Platform, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, Keyboard } from "react-native";
import List from "../../Components/List";
import { useState } from "react";

function ShoppingListScreen () {
    const [list, setList] = useState();
    const [listItems, setListItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setListItems([...listItems, list])
        setList(null);
      }
    
      const completeTask = (index) => {
        let itemsCopy = [...listItems];
        itemsCopy.splice(index, 1);
        setListItems(itemsCopy)
      }

    return (
        <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
        <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> My Shopping List</Text>
        <View style={styles.items}>
          {
            listItems.map((list, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <List text={list} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={list} onChangeText={text => setList(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tasksWrapper: {
        paddingTop: 30, 
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },    
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});

export default ShoppingListScreen;