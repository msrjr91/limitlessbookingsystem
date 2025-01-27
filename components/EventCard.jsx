import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { icons, images } from '../constants';

const { height, width } = Dimensions.get('window');

const EventCard = ({
    day, 
    date,
    location,
    title, 
    description, 
    image,
    readyToBuy
}) => {
  return (
    <View 
        style={{ 
            height: height * 0.20, // Dynamic min height (10% of screen height)
            width: width * 0.90,
            // padding: height * 0.01, // Dynamic padding (2% of screen height)
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: height * 0.01
          }} 
    >
        {/* left half */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image 
                source={image}
                resizeMode='cover'
                style={{ width: '100%', height: '100%'}} // Make the image responsive
            />
        </View>
        {/* right half */}
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 5, alignItems: 'center', height: '100%' }}>
            <Text className="text-xs font-pregular">{day}, {date} | {location}</Text>
            <Text className="text-sm font-psemibold items-center">{title}</Text>
            <Text className="text-xs text-center" numberOfLines={3}>{description}</Text>
            <Link className={`text-xs font-pregular text-center min-w-[40%] border p-1 mt-5 bg-primary text-white`} href=''>{readyToBuy ? 'Buy Tickets' : 'Details'}</Link>
        </View>
    </View>
  )
}

export default EventCard