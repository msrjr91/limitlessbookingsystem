import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'

const Profile = () => {
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
          <Pressable onPress={() => router.push('/notifications')}>
            <Image 
              source={icons.notification}
              className='w-7 h-7 mx-3'
              resizeMode='contain'
              style={{ tintColor: '#CDCDE0' }}
            />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={{ height: '100%'}} className="">
          <View className='w-full items-center h-full px-4'>
            <Image 
              source={icons.profileBlank}
              className='w-10 h-10'
              resizeMode='contain'
              style={{ tintColor: '#CDCDE0' }}
            />

            <Text className="text-lg font-psemibold text-secondary">Profile Details</Text>

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
