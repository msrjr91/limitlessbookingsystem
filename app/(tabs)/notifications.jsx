import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'

const Notifications = () => {
  return (
    <SafeAreaView className="bg-primary h-full relative">
        <View className="flex-row justify-between items-center p-2">
            <Pressable onPress={() => router.back()}>
                <Image 
                    source={icons.back}
                    className='w-7 h-7 ml-3'
                    resizeMode='contain'
                    style={{ tintColor: '#CDCDE0' }}
                />
            </Pressable>
            <Text className="text-lg font-psemibold text-secondary">Your Notifications</Text>
            <Pressable onPress={() => router.push('/messages')}>
            <Image 
                source={icons.chat}
                className='w-7 h-7 mr-3'
                resizeMode='contain'
                style={{ tintColor: '#CDCDE0' }}
            />
            </Pressable>
            
        </View>
        <ScrollView contentContainerStyle={{ height: '100%'}} className="p-4">
            <View className='w-full items-center h-full px-5'>
                <Text className="text-lg font-psemibold text-secondary">Item 1</Text>
                <Text className="text-lg font-psemibold text-secondary">Item 2</Text>
                <Text className="text-lg font-psemibold text-secondary">Item 3</Text>
                <Text className="text-lg font-psemibold text-secondary">Item 4</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Notifications