import {React,useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView} from 'react-native'
import Eth from '../../../assets/eth1.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import {useNavigation} from '@react-navigation/native'


const Create_contract = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const connect = () => {
        let account;
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
            account = accounts[0];
            console.warn(account);
        })
        navigation.navigate('Welcome');
    }

    
    return (
        <View style={styles.root}>
        <Text style={styles.title}>Connect to Meta Mask</Text>
            <CustomButton text="Connect" onPress={connect} getElementById="conn"/>
            <Image source={Eth} style={[styles.ether, {height: height * 0.1}]} resizeMode="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        padding: 20,
    },
    ether : {
        paddingTop: 710,
        width: '30%',
        maxWidth: 100,
        maxHeight: 200,
        borderRadius: 150,
        borderColor: 'black',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3D3C3A',
        margin: 30
    }
})
export default Create_contract
