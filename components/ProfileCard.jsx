import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const { height } = Dimensions.get('window');

const ProfileCard = ({
    icon,
    iconColor,
    text,
    textContext,
    style,
    iconHeight
}) => {
  return (
    <View className={`flex-col justify-evenly p-2 rounded-xl items-center ${style}`}>
        <Image 
            source={icon}
            resizeMode='contain'
            style={{
              tintColor: iconColor,
              height: height * 0.05
            }}
        />
        {
          text &&
          <Text className="text-white text-xl font-pbold text-center">{text}</Text>
        }
        <Text className="text-white text-md font-psemibold">{textContext}</Text>
    </View>
  )
}

export default ProfileCard