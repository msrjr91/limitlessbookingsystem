import { View, Text, Image } from 'react-native';
import React from 'react';
import { icons } from '../constants';

const NotificationCard = ({ 
  name, 
  notificationType, 
  notificationSubtype, 
  seen, 
  message, 
  timeSince 
}) => {
  return (
    <View 
      className={`w-full p-4 justify-center border-b ${
        seen ? 'bg-[#173652]' : 'bg-primary'
      }`}
      style={{ minHeight: 80 }} 
    >
      {/* First third: Profile icon */}
      <View className="flex-row justify-between items-center">
        <View className={`w-3 h-3 rounded-full mr-2 ${seen ? 'bg-[#173652]' : 'bg-[#080E13]'}`}/>
        {/* Profile Icon */}
        <View className="">
          <Image 
            source={icons.profileBlank}
            className="w-12 h-12"
            resizeMode="contain"
            style={{ tintColor: '#CDCDE0' }}
          />

        </View>

        {/* Middle third: Notification body */}
        <View className="flex-1 px-4">
          {/* Notification type and name */}
          <View className="flex-row items-center mb-1">
            {notificationType === 'post' && (
                <Text className="text-white font-regular"><Text className="font-bold">{name}</Text> {message}</Text>
            )}
            {notificationType === 'reminder' && (
                <Text className="text-white font-regular">{message}</Text>
            )}
          </View>
          {/* Notification subtype (if applicable) */}
          {notificationSubtype && (
            <Text className="text-gray-400 text-sm">{notificationSubtype}</Text>
          )}
        </View>

        {/* Final third: Timestamp */}
        <View>
          <Text className="text-gray-400 text-xs">{timeSince}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
