import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';

const storeName = [
    { label: 'Lidl', value: '1' },
    { label: 'Asda', value: '2' },
    { label: 'Sainsburys', value: '3' },
    { label: 'Tesco', value: '4' },
    { label: 'Morrisons', value: '5' },
]

const shopCity = [
    { label: 'Luton', value: '1' },
    { label: 'Kingston Upon Thames', value: '2' },
    { label: 'Hemel Hempstead', value: '3' },
]

const shopAddress = [
    {label: 'Francis St, Luton LU1 1HU', value: '1' },
    {label: 'St George Square, Luton LU1 2LJ', value: '1' },
    {label: 'Wigmore Ln, Stopsley, Luton LU2 9TA', value: '2' },
    {label: '34 Dunstable Rd, Luton LU1 1DY', value: '3' },
    {label: '57, Luton Mall, Luton LU1 2LL', value: '4' },
    {label: '4 Eaton Green Rd, Luton LU2 9HDJ', value: '4' },
    {label: '76-78 Birdsfoot Ln, Luton LU3 2DQ', value: '5' },
    {label: 'igh St, Houghton Regis, Dunstable LU5 5BJ', value: '5' },
]

const shopProduct = [
    { label: 'Milk', value: '1' },
    { label: 'Dark Chocolate', value: '2' },
    { label: 'Orange Juice', value: '3' },
    { label: 'Beef Mince', value: '4' },
    { label: 'Bananas', value: '5' },
    { label: 'Pepsi', value: '6' },
    { label: 'Cheese', value: '7' },
    { label: 'Mustard', value: '8' },
    { label: 'Eggs', value: '9' },
    { label: 'Olive oil', value: '10' },
]

  function HomeScreen({navigation}) {
    const [store, setStore] = useState(null);
    const [city, setCity] = useState(null);
    const [address, setAddress] = useState(null);
    const [product, setProducts] = useState(null);
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View>
                <MaterialIcons style={styles.iconButton} name='settings' size={28}/>
            </View>
            <Button
            color='#48857E'
            onPress={() => navigation.navigate('ShoppingList')}
            title="My shopping List"/>
            </TouchableOpacity>
            <View style={styles.Dropdown}>
                <Text style={styles.Text}>Search Shop</Text>
                <Dropdown
                    placeholder='Store'
                    labelField='label'
                    valueField='value'
                    data={storeName}
                    value={store}
                    onChange={(item) => {
                        setStore(item.store);
                    }} />
            </View>
            <View style={styles.Dropdown}>
            <Text style={styles.Text}>Search City</Text>
                <Dropdown
                    placeholder='City'
                    labelField='label'
                    valueField='value'
                    data={shopCity}
                    value={city}
                    onChange={(item) => {
                        setCity(item.city);
                    }} />
            </View>
            <View style={styles.Dropdown}>
            <Text style={styles.Text}>Search Address</Text>
                <Dropdown
                    placeholder='Address'
                    labelField='label'
                    valueField='value'
                    data={shopAddress}
                    value={address}
                    onChange={(item) => {
                        setAddress(item.address);
                    }} />
            </View>
            <View style={styles.Dropdown}>
            <Text style={styles.Text}>Search Product</Text>
                <Dropdown
                    placeholder='Product'
                    labelField='label'
                    valueField='value'
                    data={shopProduct}
                    value={product}
                    onChange={(item) => {
                        setProducts(product);
                    }} />
            </View>
            <View style={styles.buttonView}>
                <Pressable style={styles.searchButton} onPress={() => navigation.navigate('FindProduct')}>
                    <Text style={styles.Searchtext}>Search</Text>
                </Pressable>
            </View>
        </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  Dropdown: {
    paddingTop: 10,
  },
  Text: {
    fontSize: 18,
    color: '#48857E',
  },
  iconButton: {
    padding: 5,
    alignSelf:'flex-end',
  },
  searchButton: {
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#9CCAC4',
  },
  Searchtext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonView: {
    paddingTop: 150,
  },
});

export default HomeScreen;