import {React,useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView} from 'react-native'
import Logo from '../../../assets/Logo1.jpg'
import Eth from '../../../assets/eth1.png'
import CustomButton from '../../components/CustomButton'
import CustomDropdown from '../../components/CustomDropdown'
import CustomInput from '../../components/CustomInput'

const Login = () => {
    const {height} = useWindowDimensions();

    const [password, setPassword] = useState('');
    const onLogin = () => {
        console.warn("Logged In");
    }
    return (
        <View style={styles.root}>
            <KeyboardAvoidingView style={styles.container} behavior="padding"></KeyboardAvoidingView>
            <Image source={Logo} style={[styles.logo, {height: height * 0.8}]} resizeMode="contain" />
            <CustomDropdown />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} />
            <CustomButton text="Login" onPress={onLogin}/>
            <Image source={Eth} style={[styles.ether, {height: height * 0.1}]} resizeMode="contain"/>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        padding: 20,
    },
    logo : {
        paddingTop: 300,
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
        borderRadius: 150,
        borderColor: 'black',
        marginBottom: 10,
    },
    ether : {
        paddingTop: 250,
        width: '30%',
        maxWidth: 100,
        maxHeight: 200,
        borderRadius: 150,
        borderColor: 'black',
        marginBottom: 10,
    }
})
export default Login
