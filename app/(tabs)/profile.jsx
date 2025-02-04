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
    <SafeAreaView className="bg-primary h-full">
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

        <View className="flex-row justify-start items-center mb-2 px-3">
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
        <View>
          <ScrollView 
            contentContainerStyle={{ 
              height: '100%',
              width: '100%',
            }} 
            className="bg-white pt-2 px-3"
          >
            
            <Text className='w-full bg-primary text-white font-lg font-psemibold text-center p-3 rounded-xl mt-2 mb-5'>2025 Summary</Text>
            
            <View className='items-center w-full mb-5'>
              <View className='w-full items-center flex-row justify-between'>
                {/* <Text className="text-sm font-psemibold text-secondary">Challenger II</Text> */}
                {/* <LevelProgress points={points} maxPoints={maxPoints}/> */}
                <ProfileCard 
                  icon={icons.streak}
                  iconColor='#ADD8E6'
                  text={`22`}
                  textContext={`sessions`}
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

            <ProfileSlides />

            


            {/* <View className='w-full px-3'>
              <Text className='w-full text-primary font-lg font-psemibold text-center p-3'>My Rewards</Text>
              <Rewards />
            </View> */}



          </ScrollView>
        </View>

      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  )
}

export default Profile
