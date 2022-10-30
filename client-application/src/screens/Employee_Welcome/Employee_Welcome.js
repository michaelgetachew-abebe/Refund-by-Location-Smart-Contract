import {React,useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView} from 'react-native'
import Welcome from '../../../assets/Welcome.jpg'
import Eth from '../../../assets/eth1.png'
import CustomButton from '../../components/CustomButton'

const Employee_Welcome = () => {
    const {height} = useWindowDimensions();

    const [password, setPassword] = useState('');
    const start_Work = () => {
        console.warn("Start Working");
    }
    const end_Work = () => {
        console.warn("End Work")
    }
    return (
        <View style={styles.root}>
            <KeyboardAvoidingView style={styles.container} behavior="padding"></KeyboardAvoidingView>
            <Image source={Welcome} style={[styles.Welcome, {height: height * 0.8}]} resizeMode="contain" />
            <CustomButton text="Start Work" onPress={start_Work}/>
            <CustomButton text="End Work" onPress={end_Work}/>
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
        paddingTop: 470,
        width: '30%',
        maxWidth: 100,
        maxHeight: 200,
        borderRadius: 150,
        borderColor: 'black',
        marginBottom: 10,
    }
})
export default Employee_Welcome;