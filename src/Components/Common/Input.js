import React from 'react'
import {
    TextInput,
    View,
    Text
} from 'react-native'

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {

    const {inputStyle,labelStyle,containerStyle,} = styles
    return (
        <View style={containerStyle}> 
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value} 
                onChangeText={onChangeText} 
                style={inputStyle}
            />
        </View>
    )
}
const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    
}

export {Input}