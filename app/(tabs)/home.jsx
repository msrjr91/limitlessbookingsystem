import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full relative">
        <Pressable onPress={() => router.push('/index')} className="absolute top-[10%] right-[5%]" style={{ zIndex: 10 }}>
          <Image 
            source={icons.notification}
            className='w-6 h-6'
            resizeMode='contain'
            style={{ tintColor: '#CDCDE0' }}
          />
        </Pressable>
        <ScrollView contentContainerStyle={{ height: '100%'}} className="">
          <View className='w-full justify-center items-center h-full px-4'>

            <Text className="text-lg font-psemibold text-secondary">Home Icons Here</Text>

          </View>
        </ScrollView>

      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  )
}

export default Home