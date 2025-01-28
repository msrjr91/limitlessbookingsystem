import { View, Text, Image, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const MonthlyChallenge = ({
    date,
    title,
    description
}) => {
  return (
    <View>
        <Text>{date}</Text>
        <View>
            <Pressable onPress={() => router.back()}>
                <Image 
                    source={icons.rightArrow}
                    resizeMode='contain'
                />
            </Pressable>
            <Text>{title}</Text>
        </View>
        <Text>{description}</Text>
    </View>
  )
}

export default MonthlyChallenge