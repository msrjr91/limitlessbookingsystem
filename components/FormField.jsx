import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setshowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium pl-1'>{title}</Text>

      <View className="border border-black-200 w-full h-16 px-4 bg-gray-100 rounded-xl focus:border-secondary items-center flex flex-row">
        <TextInput 
            className="flex-1 text-primary font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title.includes('Password') && !showPassword  }
        />
        {title.includes('Password') && (
            <TouchableOpacity onPress={
                () => setshowPassword(!showPassword)
            }>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField