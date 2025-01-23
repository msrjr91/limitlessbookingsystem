import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'

const MessageLayout = () => {

  const [messagemenu, setmessagemenu] = useState("announements")

  const menuItems =[
    {title: 'Announements'},
    {title: 'Community'}, 
    {title: 'Trainers'}
  ]

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
            <Text className="text-lg font-psemibold text-secondary">Communication Center</Text>
            <Image 
                source={icons.chat}
                className='w-7 h-7 mr-3'
                resizeMode='contain'
                style={{ tintColor: '#0D2031' }}
            />
        </View>
      <View className="mt-5">
        <Text>Horizontal/Scrollable/Swipeable Menu for type of posts</Text>
      </View>
    </SafeAreaView>
  )
}

export default MessageLayout