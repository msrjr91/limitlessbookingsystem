import { View, Text, Image, Dimesions } from 'react-native'
import React from 'react'
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
    <View className=''>
        {/* left half */}
        <View>

        </View>
        {/* right half */}
        <View>

        </View>
    </View>
  )
}

export default EventCard