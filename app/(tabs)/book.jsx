import { View, Text, Image, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'


const Book = () => {

    const [bookingSelection, setBookingSelection] = useState('1')

    const bookingMenu = [
        {id: '1', title: '1 to 1 Session'},
        {id: '2', title: '1 to 2 Session'},
        {id: '3', title: 'Goal Setting Session'},
        {id: '4', title: 'Nutrition Session'},
        {id: '5', title: 'Massage Session'},
    ]

    const handlePress = (id) => {
        setBookingSelection(id)
    }

  return (
    <SafeAreaView className="bg-primary h-full relative">
        <View className="flex-row justify-end items-center p-2">
          <Pressable onPress={() => router.push('/messages')}>
            <Image 
              source={icons.chat}
              className='w-7 h-7 mx-3'
              resizeMode='contain'
              style={{ tintColor: '#CDCDE0' }}
            />
          </Pressable>
        </View>
        <ScrollView 
          // contentContainerStyle={{ height: '100%', backgroundColor: 'white'}} 
          className="bg-white h-full"
        >
          <View className='w-full justify-center items-center h-full px-4'>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'space-evenly', width: '100%'
              }}
            >

            </ScrollView>

            <Text className="text-lg font-psemibold text-secondary">Book a session here</Text>

          </View>
        </ScrollView>

      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  )
}

export default Book