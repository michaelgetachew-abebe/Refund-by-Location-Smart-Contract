import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ value, setValue, placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
            secureTextEntry={true}
            value={value}
            onChangeText={setValue} 
            placeholder={placeholder}
            styles={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginBottom: 30,
        height: 40,
        alignContent: 'center'
    },
    input: {},

})
export default CustomInput