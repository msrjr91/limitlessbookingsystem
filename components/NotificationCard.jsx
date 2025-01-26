import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { icons } from '../constants';

// Get screen dimensions
const { height, width } = Dimensions.get('window');

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
        seen ? 'bg-primary' : 'bg-[#173652]'
      }`}
      style={{ 
        minHeight: height * 0.1, // Dynamic min height (10% of screen height)
        padding: height * 0.01, // Dynamic padding (2% of screen height)
      }} 
    >
      {/* First third: Profile icon */}
      <View className="flex-row justify-between items-center">
        {/* Notification indicator */}
        <View 
          className={`rounded-full mr-2 ${
            seen ? '' : 'bg-[#CDCDE0]'
          }`} 
          style={{ 
            width: width * 0.03,  // Dynamic width (3% of screen width)
            height: width * 0.03, // Dynamic height (3% of screen width)
          }} 
        />
        
        {/* Profile Icon */}
        <View>
          <Image 
            source={icons.profileBlank}
            resizeMode="contain"
            style={{ 
              tintColor: '#CDCDE0',
              width: width * 0.12,  // Dynamic width (12% of screen width)
              height: width * 0.12, // Dynamic height (12% of screen width)
            }} 
          />
        </View>

        {/* Middle third: Notification body */}
        <View 
          className="flex-1 px-4" 
          style={{
            paddingHorizontal: width * 0.04, // Dynamic horizontal padding (4% of screen width)
          }}
        >
          {/* Notification type and name */}
          <View className="flex-row items-center mb-1">
            {notificationType === 'post' && (
              <Text className="text-white font-regular">
                <Text className="font-bold">{name}</Text> {message}
              </Text>
            )}
            {notificationType === 'reminder' && (
              <Text className="text-white font-regular">{message}</Text>
            )}
          </View>

          {/* Notification subtype (if applicable) */}
          {notificationSubtype && (
            <Text 
              className="text-gray-400 text-sm" 
              style={{
                fontSize: width * 0.035, // Dynamic font size (3.5% of screen width)
              }}
            >
              {notificationSubtype}
            </Text>
          )}
        </View>

        {/* Final third: Timestamp */}
        <View>
          <Text 
            className="text-gray-400 text-xs" 
            style={{
              fontSize: width * 0.03, // Dynamic font size (3% of screen width)
            }}
          >
            {timeSince}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
