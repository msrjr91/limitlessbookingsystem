import { View, Text, Image, TouchableOpacity, ScrollView, Pressable, Dimensions } from 'react-native'
import { React, useState } from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import ProfileCard from '../../components/ProfileCard';
import Rewards from '../../components/Rewards';
import ProfileSlides from '../../components/ProfileSlides';
import CustomButton from '../../components/CustomButton';
// import LevelProgress from '../../components/levelProgress';

const { height, width } = Dimensions.get('window');



const Profile = () => {

  const [isStaff, setIsStaff] = useState(true)

  // const [points, setPoints] = useState(0);
  // const maxPoints = 100; // Points needed for the next level
  // const addPoints = () => {
  //   setPoints((prevPoints) => Math.min(prevPoints + 20, maxPoints)); // Add 20 points per task
  // };
  return (
    <SafeAreaView className='bg-primary h-full'>
      {/* options */}
      <View className='flex-row items-center justify-between'>
        {/* Fixed height wrapper to maintain consistent spacing */}
        <View className="h-10 justify-center">
          {isStaff && (
            <TouchableOpacity onPress={() => router.push('')} activeOpacity={0.7}>
              <View className='justify-center bg-white rounded-xl p-2 ml-3 w-[120px]'>
                <Text className='text-primary text-sm font-psemibold text-center'>Staff Portal</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        <View className='flex-row items-center'>
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
      </View>




      {/* profile header */}
      <View className="flex-row justify-start items-center px-3">
        <Image 
          source={icons.profileBlank}
          resizeMode='contain'
          style={{ 
            tintColor: '#CDCDE0',
            height: height * 0.15,
            width: width * 0.25,
          }}
        />
        <View className='ml-2'>
          <Text className="text-xl font-pbold text-white">Mike Ross</Text>
          <Text className="text-sm font-psemibold text-secondary">Gold Member since 25 Mar, 2022</Text>
        </View>
      </View>

      <View className='flex-1 justify-between'>
        {/* stats */}
        <View className='items-center mb-5'>
          <View className='items-center flex-row justify-around bg-white w-[90%] rounded-xl'>
            <ProfileCard 
              icon={icons.streak}
              iconColor='#ADD8E6'
              text={`22`}
              textContext={`Sessions`}

            />
            <View className="border-l border-[#CDCDE0] h-[70%]" />
            <ProfileCard 
              icon={icons.experience}
              iconColor='#FF8E01'
              text={`1320`}
              textContext={`XP`}

            />
            <View className="border-l border-[#CDCDE0] h-[70%]" />
            <ProfileCard 
              icon={icons.rank}
              iconColor='#C0C0C0'
              text={`II`}
              textContext={`Challenger`}

            />
          </View>
        </View>
        {/* data visualizations */}
        <View className='mb-5'>
          <ProfileSlides />
        </View>
        {/* options */}
        <View className='items-center'>
          <View className='flex-row justify-between w-[90%] gap-x-4'>
              <Pressable onPress={() => router.push('/misc/monthlyChallenges')} className='flex-1'>
                <ProfileCard 
                  style='bg-white'
                  icon={icons.challenge}
                  iconColor='red'
                  text={``}
                  textContext={`Monthly Challenges`}
                />
              </Pressable>
              <Pressable onPress={() => router.push('')} className='flex-1'>
                <ProfileCard 
                  style='bg-white'
                  icon={icons.reward}
                  iconColor='blue'
                  text={``}
                  textContext={`Reward Center`}
                />
              </Pressable>
          </View>
        </View>
      </View>

    </SafeAreaView>

  )
}

export default Profile
