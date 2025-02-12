import { View, Text, ScrollView, Pressable, Image, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import { router } from 'expo-router'
import Community from './community'
import Trainers from './trainers'
import DirectMessages from './directmessage'


const MessageLayout = () => {

  const [messagemenu, setmessagemenu] = useState('1')

  const menuItems = [
    // {id: '1', title: 'Announements'},
    {id: '1', title: 'Community'}, 
    {id: '2', title: 'Trainers'}, 
    {id: '3', title: 'Your Messages'},
  ]

  const handlePress = (id) => {
    setmessagemenu(id);
  };

  const renderContent = () => {
    switch (messagemenu) {
      // case '1':
      //   return <Announcements />;
      case '1':
        return <Community />
      case '2': 
        return <Trainers />
      case '3':
        return <DirectMessages />
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
        {/* <Image 
          source={icons.addComment}
          className='w-10 h-10 absolute bottom-[5%] right-[5%]'
          resizeMode='contain'
          style={{ tintColor: '#D69006'}}
        /> */}

        <View className="flex-row justify-between items-center p-2">
            <Pressable onPress={() => router.back()}>
                <Image 
                    source={icons.back}
                    className='w-7 h-7 ml-3'
                    resizeMode='contain'
                    style={{ tintColor: '#CDCDE0' }}
                />
            </Pressable>
            <Image 
                source={icons.draft}
                className='w-7 h-7 mr-3'
                resizeMode='contain'
                style={{ tintColor: '#CDCDE0' }}
            />
        </View>
        <View className='h-full'>
          {/* <View className="mt-5">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className=""
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {menuItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  className={`px-5 py-2 rounded-full mr-3 ${
                    messagemenu === item.id ? 'bg-secondary-100': 'bg-[#080E13]'
                  }`}
                  onPress={() => handlePress(item.id)}
                >
                  <Text
                    className={`text-[#CDCDE0] ${
                      messagemenu === item.id ? 'font-psmibold' : 'font-light'
                    }`}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View> */}
          <View className="h-[1px] bg-[#080E13] my-3"/>
          <View className=''>
            {/* {renderContent()} */}
            <DirectMessages />
          </View>
        </View>

    </SafeAreaView>
  )
}

export default MessageLayout