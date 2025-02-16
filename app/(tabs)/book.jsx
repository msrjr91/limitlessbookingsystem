import { View, Text, Image, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';
import { Link, router, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../constants';
import One from '../bookingContent/one';

const Book = () => {
    const [bookingSelection, setBookingSelection] = useState('1');

    const bookingMenu = [
        { id: '1', title: '1 to 1', icon: icons.onetoone },
        { id: '2', title: '1 to 2', icon: icons.onetotwo },
        { id: '3', title: 'Goal Setting', icon: icons.goalsetting },
        { id: '4', title: 'Nutrition', icon: icons.nutrition },
        { id: '5', title: 'Massage', icon: icons.massage },
    ];

    const handlePress = (id) => {
        setBookingSelection(id);
    };

    return (
        <SafeAreaView className="bg-primary h-full relative">
            {/* Header */}
            <View className="flex-row justify-between items-center p-2">
                <Pressable onPress={() => router.back()}>
                    <Image source={icons.back} className="w-7 h-7 ml-3" resizeMode="contain" style={{ tintColor: '#CDCDE0' }} />
                </Pressable>
                <Pressable onPress={() => router.push('/messages')}>
                    <Image source={icons.chat} className="w-7 h-7 mr-3" resizeMode="contain" style={{ tintColor: '#CDCDE0' }} />
                </Pressable>
            </View>

            {/* Main Content */}
            <View className="h-full">
                {/* Booking Selection */}
                <View className="w-full h-[15%]">
                    <Text className="text-lg font-psemibold text-white mb-1 px-5">Select a Session</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            gap: 10,
                            paddingHorizontal: 5,
                        }}
                    >
                        {bookingMenu.map((item) => (
                            <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
                                <View
                                    className={`px-2 py-2 items-center rounded-xl ${
                                        bookingSelection === item.id ? 'bg-blue-700' : 'bg-gray-200'
                                    }`}
                                    style={{
                                        width: 100,
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image source={item.icon} style={{ width: 30, height: 30, tintColor: bookingSelection === item.id ? 'white' : 'black' }} />
                                    <Text className={`text-sm font-psemibold mt-2 ${bookingSelection === item.id ? 'text-white' : 'text-black'}`}>
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Main Booking Section */}
                <ScrollView className="h-[85%] mt-3">
                    {/* <View className="w-full justify-center items-center h-full px-4">
                        <Text className="text-lg font-psemibold text-secondary">     {bookingMenu.find((item) => item.id === bookingSelection)?.title || "Book a session here"}</Text>
                    </View> */}
                    <One />
                </ScrollView>
            </View>

            <StatusBar backgroundColor="#062033" style="light" />
        </SafeAreaView>
    );
};

export default Book;
