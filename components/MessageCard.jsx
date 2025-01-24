import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { icons } from '../constants';

const MessageCard = ({ 
  name, 
  containerStyles, 
  textStyles, 
  membership, 
  time, 
  textBody, 
  liked, 
  handlePress 
}) => {
  return (
    <View className="flex-row justify-start w-full">
      {/* LEFT HALF: profile icon */}
      <View className="px-4">
        <Image 
          source={icons.profileBlank}
          className="w-12 h-12"
          resizeMode="contain"
          style={{ tintColor: '#CDCDE0' }}
        />
      </View>

      {/* RIGHT HALF: body */}
      <View className="flex-1 px-3 py-2 rounded-lg">
        {/* Identifiers */}
        <View className="flex-row items-center mb-1">
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
        <View className="mb-2">
          <Text className="text-white text-sm">{textBody}</Text>
        </View>

        {/* Like, Comment Icons */}
        <View className="flex-row justify-end space-x-3">
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
              className="w-8 h-8 mx-5"
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
