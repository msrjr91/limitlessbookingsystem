import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import { React, useState } from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import LevelProgress from '../../components/levelProgress';

const Profile = () => {

  // const [points, setPoints] = useState(0);
  // const maxPoints = 100; // Points needed for the next level
  // const addPoints = () => {
  //   setPoints((prevPoints) => Math.min(prevPoints + 20, maxPoints)); // Add 20 points per task
  // };
  return (
    <SafeAreaView className="bg-primary h-full relative">

        <View className="flex-row justify-end items-center p-2">
          <Pressable onPress={() => router.push('/settings')}>
            <Image 
              source={icons.settingsProfile}
              className='w-7 h-7'
              resizeMode='contain'
              style={{ tintColor: '#CDCDE0' }}
            />
          </Pressable>
          <Pressable onPress={() => router.push('/messages')}>
            <Image 
              source={icons.chat}
              className='w-7 h-7 mx-3'
              resizeMode='contain'
              style={{ tintColor: '#CDCDE0' }}
            />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={{ height: '100%'}} className="">
      
          <View className='w-full items-center h-full px-4'>

            <Text className="text-lg font-psemibold text-secondary">Member Name</Text>
            <Image 
              source={icons.profileBlank}
              className='w-[25%] h-[25%]'
              resizeMode='contain'
              style={{ tintColor: '#CDCDE0' }}
            />
            <Text className="text-lg font-regular text-secondary">Gold Member</Text>
            <Text className="text-sm font-regular text-secondary">since 25 Mar, 2022</Text>
            <Text className="text-sm font-psemibold text-secondary">Challenger II</Text>
            {/* <LevelProgress points={points} maxPoints={maxPoints}/> */}
          </View>

        </ScrollView>

      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  )
}

export default Profile
