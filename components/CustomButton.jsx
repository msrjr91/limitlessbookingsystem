import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`rounded-full min-h-[50px] justify-center items-center ${containerStyles} ${isLoading?'opacity-50':''}`}
        disabled={isLoading}
    >
        <Text className={`text-lg p-2 ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton