import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MessageCard from '../../components/MessageCard'

const Announcements = () => {
  
  const handlePress = () => {
    //probably will need message ID here from rest api to update like status on that comment
  }

  return (
    <ScrollView className='w=full h-full'>
      <MessageCard 
        name="Mike Ross"
        membership="gold"
        time="10:13 PM 23 Jan, 2025"
        textBody="Excepteur est ullamco commodo eu qui est pariatur consequat adipisicing. Mollit Lorem eu occaecat sit dolore. Ea et minim sunt nostrud pariatur velit qui aute sint sit nulla velit ea qui. Officia pariatur tempor qui incididunt elit et. Amet occaecat enim veniam eu veniam reprehenderit irure. Laborum consectetur in dolore id amet fugiat voluptate officia duis excepteur labore ad labore. Consequat id aute fugiat labore ut duis duis exercitation qui est cillum."
        liked={true}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Shu Ishiwatari"
        membership="platinum"
        time="11:13 PM 23 Jan, 2025"
        textBody="Quis ex incididunt pariatur culpa ad nisi. Id mollit id commodo in sunt. Quis culpa sunt adipisicing magna tempor sunt reprehenderit commodo ut commodo sunt. Tempor nostrud dolor enim laborum culpa in esse ut eu consequat est officia proident proident. Est sunt Lorem reprehenderit reprehenderit mollit. Pariatur et ipsum enim exercitation dolor aliquip magna. Voluptate sit elit duis magna dolor ea eiusmod ex eu amet id minim duis."
        liked={false}
        handlePress={handlePress}
      />
      <MessageCard 
        name="Virgil Van Dijk"
        membership="gold"
        time="10:13 PM 23 Jan, 2025"
        textBody="I credit Limitless for all of my trophies. Thanks, Levi!"
        liked={true}
        handlePress={handlePress}
      />
    </ScrollView>
  )
}

export default Announcements