import { View, Text, Image, ScrollView, Pressable, Dimensions } from 'react-native'
import { React, useState } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import ProfileCard from '../../components/ProfileCard';
import Rewards from '../../components/Rewards';
import ProfileSlides from '../../components/ProfileSlides';
// import LevelProgress from '../../components/levelProgress';


const { height, width } = Dimensions.get('window');


const Profile = () => {

  // const [points, setPoints] = useState(0);
  // const maxPoints = 100; // Points needed for the next level
  // const addPoints = () => {
  //   setPoints((prevPoints) => Math.min(prevPoints + 20, maxPoints)); // Add 20 points per task
  // };
  return (
    <SafeAreaView className="bg-primary h-full w-full">
      {/* top section */}
      <View className='relative'>
        {/* options */}
        <View className="absolute top-0 right-0 flex-row justify-end items-center p-2">
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
        {/* profile details */}
        <View className="flex-row justify-start items-center px-3">
          <Image 
            source={icons.profileBlank}
            resizeMode='contain'
            style={{ 
              tintColor: '#CDCDE0',
              height: height * 0.1,
              width: width * 0.2,
            }}
          />
          <View className='ml-2'>
            <Text className="text-xl font-pbold text-white">Mike Ross</Text>
            <Text className="text-sm font-psemibold text-secondary">Gold Member since 25 Mar, 2022</Text>
          </View>

        </View>
      </View>
      {/* main */}
      <View className="bg-white px-3 h-[92%] w-full flex-col justify-between">
        {/* 1/3 */}
        <View className='h-[32%] w-full'>
          <View className='h-1/3 w-full items-center justify-center'>
            <Text className='w-full bg-primary text-white font-xl font-psemibold text-center rounded-xl border borde-red-500 p-3'>2025 Summary</Text>
          </View>
          
          <View className='h-2/3 w-full items-center flex-row justify-between'>
            <ProfileCard 
              icon={icons.streak}
              iconColor='#ADD8E6'
              text={`22`}
              textContext={`Sessions`}
              style='w-[32%]'
            />
            <ProfileCard 
              icon={icons.experience}
              iconColor='#FF8E01'
              text={`1320`}
              textContext={`XP`}
              style='w-[32%]'
            />
            <ProfileCard 
              icon={icons.rank}
              iconColor='#C0C0C0'
              text={`II`}
              textContext={`Challenger`}
              style='w-[32%]'
            />
          </View>
        </View>
        {/* 2/3 */}
        <View className='w-full h-[40%] bg-primary items-center justify-center rounded-xl'>
          {/* <ProfileSlides /> */}
        </View>
        {/* 3/3 */}
        <View className='w-full h-[22%] flex-row justify-between pb-2'>
          <ProfileCard 
            style='w-[49%]'
            icon={icons.challenge}
            text={``}
            textContext={`Monthly Challenges`}
          />
          <ProfileCard 
            style='w-[49%]'
            icon={icons.reward}
            text={``}
            textContext={`Reward Center`}
          />
        </View>

      </View>

      {/* <StatusBar
        backgroundColor='#062033'
        style='light'
      /> */}
    </SafeAreaView>
  )
}

export default Profile
