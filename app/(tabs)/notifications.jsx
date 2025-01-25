import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../constants';
import NotificationCard from '../../components/NotificationCard';

const Notifications = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Header */}
      <View className="flex-row justify-between items-center p-2">
        <Pressable onPress={() => router.back()}>
          <Image 
            source={icons.back}
            className="w-7 h-7 ml-3"
            resizeMode="contain"
            style={{ tintColor: '#CDCDE0' }}
          />
        </Pressable>
        <Text className="text-lg font-psemibold text-secondary">Your Notifications</Text>
        <Pressable onPress={() => router.push('/messages')}>
          <Image 
            source={icons.chat}
            className="w-7 h-7 mr-3"
            resizeMode="contain"
            style={{ tintColor: '#CDCDE0' }}
          />
        </Pressable>
      </View>

      {/* Notifications List */}
      <View>
        <ScrollView className="">
            <View>
            <NotificationCard 
            notificationType="post"
            name="Levi"
            message="posted: Hi everyone! Reminder that we will be open on Christmas Eve until 4:00 PM!"
            timeSince="2h"
            seen={false}
            />
            <NotificationCard 
            notificationType="post"
            name="Mikasa"
            message="posted: Just wanted to say that I'm loving my training so far!"
            timeSince="3h"
            seen={true}
            />
            <NotificationCard 
            notificationType="reminder"
            name=""
            message="You have a session with Levi coming up today at 4:30pm. See you soon!"
            timeSince="4h"
            seen={false}
            />
            <NotificationCard 
                notificationType="post"
                name="Mikasa"
                message="posted: Just wanted to say that I'm loving my training so far!"
                timeSince="3h"
                seen={true}
            />
            <NotificationCard 
                notificationType="post"
                name="Armin"
                message="posted: Don't forget about the group session tomorrow at 5 PM!"
                timeSince="2h"
                seen={false}
            />
            <NotificationCard 
                notificationType="post"
                name="Levi"
                message="posted: Please keep the gym tidy after your session!"
                timeSince="1d"
                seen={true}
            />
            <NotificationCard 
                notificationType="reminder"
                name=""
                message="See you for your massage appointment tonight at 6:30 PM!"
                timeSince="4h"
                seen={false}
            />
            <NotificationCard 
                notificationType="post"
                name="Hange"
                message="posted: New personal training slots are now open! Check them out!"
                timeSince="2d"
                seen={true}
            />
            <NotificationCard 
                notificationType="post"
                name="Jean"
                message="posted: The weekend bootcamp was amazing! Thanks to everyone who joined."
                timeSince="6h"
                seen={false}
            />
            <NotificationCard 
                notificationType="post"
                name="Connie"
                message="posted: Reminder: Locker cleaning will take place on Friday evening."
                timeSince="8h"
                seen={true}
            />
            <NotificationCard 
                notificationType="post"
                name="Historia"
                message="posted: Monthly progress check-in forms are now available."
                timeSince="12h"
                seen={true}
            />
            <NotificationCard 
                notificationType="post"
                name="Erwin"
                message="posted: Stay consistent! Progress is a marathon, not a sprint."
                timeSince="1d"
                seen={false}
            />
            <NotificationCard 
                notificationType="post"
                name="Zeke"
                message="posted: Just finished a killer session with the trainers. Highly recommend!"
                timeSince="5h"
                seen={false}
            />
            </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
