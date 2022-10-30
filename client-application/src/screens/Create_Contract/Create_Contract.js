import {React,useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, KeyboardAvoidingView} from 'react-native'
import Eth from '../../../assets/eth1.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const create_Contract = () => {
    const {height} = useWindowDimensions();

    const [empname, setEmpname] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longtiude, setLongtude] = useState('');
    const [reqDistance, setReqdistance] = useState('');

    const create = () => {
        console.warn("Logged In");
    }
    return (
        <View style={styles.root}>
        <Text style={styles.title}>Create a Contact</Text>
            <CustomInput 
            placeholder="Employee Name" 
            value={empname} 
            setValue={setEmpname} 
            />
            <CustomInput 
            placeholder="Address" 
            value={address} 
            setValue={setAddress} 
            />
            <CustomInput 
            placeholder="Latitude" 
            value={latitude} 
            setValue={setLatitude} 
            />
            <CustomInput 
            placeholder="Longtiude" 
            value={longtiude} 
            setValue={setLongtude} 
            />
            <CustomInput 
            placeholder="Distance Required" 
            value={reqDistance} 
            setValue={setReqdistance} 
            />
            <CustomButton text="Create" onPress={create}/>
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
        paddingTop: 210,
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
export default create_Contract
