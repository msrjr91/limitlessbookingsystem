import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { icons } from '../../constants';
import MonthlyChallenge from '../../components/MonthlyChallenge'

const MonthlyChallenges = () => {
  return (
    <SafeAreaView className="h-full w-full items-center bg-primary">
      <View className="w-full flex-row justify-between items-center p-2">
        <Pressable onPress={() => router.back()}>
          <Image 
            source={icons.back}
            className="w-7 h-7 ml-3"
            resizeMode="contain"
            style={{ tintColor: '#CDCDE0' }}
          />
        </Pressable>
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
      <View>
        <ScrollView  contentContainerStyle={{ alignItems: 'center', marginTop: 5}} showsVerticalScrollIndicator={false}>
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 5,
          }}>
            <Text className="text-xl text-white font-psemibold">October 2024</Text>
            <MonthlyChallenge 
              title={`Leg Press Challenge`}
              description={`How many reps on the leg press can you do in 2 minutes? Your body weight is the weight you’re pushing! The winner will receive a free tub of protein!`}
              completed={false}
            />
            <Text className="text-xl text-white font-psemibold">September 2024</Text>
            <MonthlyChallenge 
              title={`Bench Press Challenge`}
              description={`How many reps on the leg press can you do in 2 minutes? Your body weight is the weight you’re pushing! The winner will receive a free tub of protein!`}
              completed={true}
            />
            <Text className="text-xl text-white font-psemibold">August 2024</Text>
            <MonthlyChallenge 
              title={`Team Steps Challenge`}
              description={`How many reps on the leg press can you do in 2 minutes? Your body weight is the weight you’re pushing! The winner will receive a free tub of protein!`}
              completed={true}
            />
            <Text className="text-xl text-white font-psemibold">July 2024</Text>
            <MonthlyChallenge 
              title={`Sample Challenge`}
              description={`Do adipisicing do est ut dolor eu aliquip dolor voluptate. Ad deserunt in consequat mollit commodo laboris aliqua ullamco. Mollit anim culpa labore dolor laboris nostrud incididunt eu dolore.`}
              completed={true}
            />
            <View className="items-center my-10">
              <Text className="text-white font-regular text-xs">No more challenges!</Text>
              <View className="h-[1px] bg-[#080E13] my-10"/>
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  )
}

export default MonthlyChallenges