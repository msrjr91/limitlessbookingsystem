import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';
import { router } from 'expo-router';
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

    const selectedTitle = bookingMenu.find(item => item.id === bookingSelection)?.title || "Book a session here";

    return (
        <SafeAreaView className="bg-primary h-full relative">
            {/* Header */}
            <View className="flex-row justify-between items-center p-2">
                <Pressable onPress={() => router.back()}>
                    <Image source={icons.back} className="w-7 h-7 ml-3" resizeMode="contain" style={{ tintColor: '#CDCDE0' }} />
                </Pressable>
                <Text className="text-lg font-psemibold text-white mb-1 text-center">Select a Session</Text>
                <Pressable onPress={() => router.push('/messages')}>
                    <Image source={icons.chat} className="w-7 h-7 mr-3" resizeMode="contain" style={{ tintColor: '#CDCDE0' }} />
                </Pressable>
            </View>

            {/* Main Content */}
            <View className="h-full">
                {/* Booking Selection */}
                <View className="w-full h-[5%]">

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
                                    className={`px-3 py-2 flex-row items-center justify-center rounded-xl ${
                                        bookingSelection === item.id ? 'bg-blue-600' : 'bg-gray-200'
                                    }`}
                                    style={{
                                        alignSelf: 'flex-start', 
                                    }}
                                >
                                    <Image 
                                        source={item.icon} 
                                        style={{ width: 20, height: 20, tintColor: bookingSelection === item.id ? 'white' : 'black', marginRight: 5 }} 
                                    />
                                    <Text 
                                        className={`text-sm font-psemibold ${bookingSelection === item.id ? 'text-white' : 'text-black'}`}
                                    >
                                        {item.title}
                                    </Text>
                                </View>


                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Main Booking Section */}
                <ScrollView className="h-[85%] mt-3 bg-white">
                    <One 
                      trainingType={selectedTitle}
                    />
                </ScrollView>
            </View>

            <StatusBar backgroundColor="#062033" style="light" />
        </SafeAreaView>
    );
};

export default Book;
