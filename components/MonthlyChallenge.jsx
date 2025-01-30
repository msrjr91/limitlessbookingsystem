import { View, Text, Image, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../constants'
import { router } from 'expo-router'

const { height, width } = Dimensions.get('window');

const MonthlyChallenge = ({
    title,
    description, 
    completed,
}) => {
  return (
    <View
        style={{
            height: height * 0.10,
            width: width * 0.80,
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: height * 0.05,
        }}
    >
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        className='w-full rounded-t-xl border-x-2 border-t-2 border-black bg-primary p-2 justify-between'
        >
            <Image 
                source={icons.rightArrow}
                resizeMode='contain'
                tintColor={'#0D2031'}
            />
            <Text className='text-white flex-1 text-center'>{title}</Text>
            <Pressable onPress={() => router.back()}>
                <Image 
                    source={icons.rightArrow}
                    resizeMode='contain'
                    tintColor={'#1E1E2D'}
                    className={`${completed ? 'bg-[#D69006]' : 'bg-[#00A300]'} rounded-sm p-1 h-6 w-6`}
                />
            </Pressable>
        </View>
        <Text className='w-full h-full bg-white rounded-b-xl border-x-2 border-b-2 border black p-2 text-justify'>{description}</Text>
    </View>
  )
}

export default MonthlyChallenge