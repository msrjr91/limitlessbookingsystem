import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MessageCard from '../../components/MessageCard'

const DirectMessages = () => {

  const handlePress = () => {
    //probably will need message ID here from rest api to update like status on that comment
  }

  return (
    <ScrollView className='w=full h-full'>
      <MessageCard 
        name="Levi"
        membership="platinum"
        time="10:13 PM 23 Jan, 2025"
        textBody="Hey Levi, I've injured my ankle today. Can we skip leg day today?"
        liked={false}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Shu Ishiwatari"
        membership="platinum"
        time="09:13 PM 23 Jan, 2025"
        textBody="Quis ex incididunt pariatur culpa ad nisi. Id mollit id commodo in sunt. Quis culpa sunt adipisicing magna tempor sunt reprehenderit commodo ut commodo sunt. Tempor nostrud dolor enim laborum culpa in esse ut eu consequat est officia proident proident. Est sunt Lorem reprehenderit reprehenderit mollit. Pariatur et ipsum enim exercitation dolor aliquip magna. Voluptate sit elit duis magna dolor ea eiusmod ex eu amet id minim duis."
        liked={false}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Virgil Van Dijk"
        membership="gold"
        time="7:19 PM 23 Jan, 2025"
        textBody="I credit Limitless for all of my trophies. Thanks, Levi!"
        liked={true}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Jamie Carragher"
        membership="platinum"
        time="6:16 PM 23 Jan, 2025"
        textBody="Laborum do excepteur esse Lorem. Aute pariatur qui amet in ad sint. Dolor laborum nostrud aliqua elit dolor quis ex tempor incididunt sunt eu. Nostrud tempor qui ex quis dolor irure. Duis duis dolore ex minim minim ullamco. Reprehenderit in sit ullamco aute officia nisi amet aute incididunt incididunt. Magna voluptate dolor ea non irure ad ipsum nostrud veniam."
        liked={true}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Mo Salah"
        membership="gold"
        time="3:22 PM 23 Jan, 2025"
        textBody="Occaecat nulla culpa exercitation enim sint ut minim nostrud amet. Duis ad culpa cillum incididunt. Ad labore nostrud sint cupidatat non non duis. Veniam laborum sit incididunt est laborum sunt anim sit."
        liked={true}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Trent Alexander Arnold"
        membership="gold"
        time="2:56 PM 23 Jan, 2025"
        textBody="Officia Lorem velit qui minim amet veniam occaecat excepteur officia consequat reprehenderit dolore excepteur in. Culpa do pariatur id consequat nostrud elit ea consectetur incididunt velit ipsum excepteur qui adipisicing. Exercitation quis aute minim fugiat. Non commodo cupidatat cupidatat voluptate excepteur incididunt quis nostrud excepteur duis. Ea ad aliqua ipsum duis excepteur dolor esse sit. Aute reprehenderit proident id ipsum reprehenderit in cupidatat elit in ex ea dolore."
        liked={true}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Darwin Nunez"
        membership="platinum"
        time="1:43 PM 23 Jan, 2025"
        textBody="I'm working on my finishing and this gym as helped me a lot! elit non excepteur eiusmod minim eu aute ad. Eiusmod dolor dolor ipsum Lorem eu ipsum. Velit pariatur tempor nostrud non minim exercitation sunt. Ad laboris excepteur labore enim pariatur do aliquip cillum incididunt. Ipsum nostrud deserunt adipisicing anim do deserunt ut veniam voluptate consequat voluptate irure. Et sunt do amet nulla proident nisi aliqua do sint amet ex quis nisi. Est eu et occaecat amet et id commodo ipsum."
        liked={false}
        handlePress={handlePress}
      />
      <View className="items-center mt-5">
        <Text className="text-white font-regular text-xs">That's all!</Text>
      </View>
      <View className="h-[1px] bg-[#080E13] my-10"/>
    </ScrollView>
  )
}

export default DirectMessages