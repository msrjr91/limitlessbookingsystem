import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../constants'

const Notifications = () => {
  return (
    <SafeAreaView className="bg-primary h-full relative">
        <Pressable onPress={() => router.back()} className="absolute top-[10%] left-[5%]" style={{ zIndex: 10 }}>
            <Image 
                source={icons.back}
                className='w-6 h-6'
                resizeMode='contain'
                style={{ tintColor: '#CDCDE0' }}
            />
        </Pressable>
        <ScrollView contentContainerStyle={{ height: '100%'}} className="p-4">
            <View className='w-full items-center h-full px-4'>
                <Text className="text-lg font-psemibold text-secondary">List of notifications</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Notifications