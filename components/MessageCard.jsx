import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { icons } from '../constants';

const { height, width } = Dimensions.get('window');

const MessageCard = ({ 
  name, 
  containerStyles, 
  textStyles, 
  membership, 
  time, 
  textBody, 
  photo,
  liked, 
  handlePress 
}) => {
  return (
    <View className="flex-row w-full mb-2">
      {/* LEFT HALF: profile icon */}
      <Image 
        source={icons.profileBlank}
        className="w-14 h-14 mr-2"
        resizeMode="contain"
        style={{ tintColor: '#CDCDE0' }}
      />
      {/* LEFT HALF: profile icon */}


      {/* RIGHT HALF: body */}
      <View className="flex-1">
        {/* Identifiers */}

        <View className="flex-row items-center">
          <Text className="text-white font-bold mr-2">{name}</Text>
          <Image 
            source={icons.verified}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
            style={{ tintColor: membership === 'gold' ? '#D69006' : '#d9d9d9' }}
          />
          <Text className="text-white text-xs">{time}</Text>
        </View>

        {/* Text Body */}
        <Text className="text-white text-sm mt-1">{textBody}</Text>
        {/* photo */}

        {photo && (
          <Image 
            source={photo}
            style={{ 
              width: width * 0.8,
              height: height * 0.25,
            }}
            className='rounded-lg mt-2'
          />
        )}

        {/* Like, Comment Icons */}
        <View className="flex-row justify-end mt-3">
          <Pressable onPress={handlePress}>
            <Image 
              source={liked ? icons.loveRed : icons.love}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </Pressable>
          <Pressable onPress={handlePress}>
            <Image 
              source={icons.comments}
              className="w-8 h-8 mx-7"
              resizeMode="contain"
            />
          </Pressable>
        </View>
      
      </View>
    {/* RIGHT HALF: body */}

    </View>
  );
};

export default MessageCard;
