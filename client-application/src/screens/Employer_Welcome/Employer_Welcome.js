import {React,useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView} from 'react-native'
import Eth from '../../../assets/eth1.png'
import Welcome from '../../../assets/Welcome.jpg'
import CustomButton from '../../components/CustomButton'

const Employer_Welcome = () => {
    const {height} = useWindowDimensions();

    const createContract = () => {
        console.warn("Heading to create a contarct");
    }
    const trackEmployee = () => {
        console.warn("Tracking the Employee")
    }
    return (
        <View style={styles.root}>
            <KeyboardAvoidingView style={styles.container} behavior="padding"></KeyboardAvoidingView>
            <Image source={Welcome} style={[styles.Welcome, {height: height * 0.8}]} resizeMode="contain" />
            <CustomButton text="Create a Contract" onPress={createContract}/>
            <CustomButton text="Track an Employee" onPress={trackEmployee}/>
            <Image source={Eth} style={[styles.ether, {height: height * 0.1}]} resizeMode="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        padding: 20,
    },
    Welcome : {
        paddingTop: 300,
        width: '70%',
        maxWidth: 200,
        maxHeight: 100,
        borderRadius: 150,
        marginBottom: 10,
    },
    ether : {
        paddingTop: 450,
        width: '40%',
        maxWidth: 100,
        maxHeight: 200,
        borderRadius: 100,
        marginBottom: 100,
    }
})
export default Employer_Welcome
