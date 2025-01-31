import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const { height, width } = Dimensions.get('window');

const ProfileCard = ({
    icon,
    iconColor,
    text,
    textContext
}) => {
  return (
    <View className="flex-col w-[32%] rounded-xl bg-[#080E13] items-center p-2">
        <Image 
            source={icon}
            resizeMode='contain'
            style={{
              tintColor: iconColor,
              height: height * 0.04
            }}
        />
        <Text className="text-white text-xl font-pbold">{text}</Text>
        <Text className="text-white text-sm font-pregular">{textContext}</Text>
    </View>
  )
}

export default ProfileCard