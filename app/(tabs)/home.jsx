import { View, Text, Image, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { Link, router, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import Events from '../homeContent/events';
// import MonthlyChallenges from '../misc/monthlyChallenges';
import Community from '../homeContent/community';
import Announcements from '../homeContent/announcements';

const { width } = Dimensions.get('window');

const Home = () => {

  const [homeSelection, sethomeSelection] = useState('2')

  const homeItems = [
    {id: '1', title: 'Community'},
    {id: '2', title: 'Announcements'}, 
    {id: '3', title: 'Events'}, 
  ]

  const handlePress = (id) => {
    sethomeSelection(id)
  }

  const renderContent = () => {
    switch (homeSelection) {
      case '1':
        return <Community />;
      case '2': 
        return <Announcements />
      case '3': 
        return <Events />
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full relative">

        <View className="flex-row justify-between items-center p-2">
            <Image 
              source={icons.back}
              className="w-7 h-7 ml-3"
              resizeMode="contain"
              style={{ tintColor: '#0D2031' }}
            />

          {/* <Text className="text-lg font-psemibold text-secondary">Your Notifications</Text> */}
          <Pressable onPress={() => router.push('/messages')}>
            <Image 
              source={icons.chat}
              className="w-7 h-7 mr-3"
              resizeMode="contain"
              style={{ tintColor: '#CDCDE0' }}
            />
          </Pressable>
        </View>

        <View className='h-full'>
          <View className="mt-2">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              // contentContainerStyle={{ paddingHorizontal: 10 }}
              contentContainerStyle={{ justifyContent: 'space-evenly', width: '100%' }}
            >
              {homeItems.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  className="py-2 w-1/3"
                  onPress={() => handlePress(item.id)}
                  style={{
                    justifyContent: 'center', 
                    alignItems: 'center',
                  }}
                >
                  <Text
                    className={`text-[#CDCDE0] ${
                      homeSelection === item.id ? 'font-psmibold' : 'font-light'
                    }`}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Line with dynamic underline */}
          <View className="relative h-[1px] bg-[#080E13] mt-2">
            <View
              className="absolute h-[2px] bg-[#FFA001] rounded-full"
              style={{
                width: width / homeItems.length, // Dynamic width for underline
                left: homeItems.findIndex((item) => item.id === homeSelection) * (width / homeItems.length), // Calculate position
              }}
            />
          </View>
          <View className=''>
            {renderContent()}
          </View>

        </View>

      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  )
}

export default Home