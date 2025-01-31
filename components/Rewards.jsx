import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { router } from 'expo-router'

const Rewards = () => {
    const [reward, setReward] = useState('');

    const rewardItems = [
        { id: '1', title: 'Free Protein Bar', icon: icons.proteinBar },
        { id: '2', title: 'Free Protein Bar', icon: icons.proteinBar },
        { id: '3', title: 'Free Protein Bar', icon: icons.proteinBar },
        { id: '4', title: 'Free Protein Bar', icon: icons.proteinBar },
        { id: '5', title: 'Free Event', icon: icons.eventTicket },
        { id: '6', title: 'Protein Shake', icon: icons.proteinShake },
        { id: '7', title: 'Limitless Breakfast', icon: icons.breakfast },
        { id: '8', title: '£10 off Cafe Voucher', icon: icons.voucher },
    ];

    const handlePress = (id) => {
        setReward(id);
    };

    return (
        <View className="w-full bg-[#080E13] rounded-xl p-3">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true} 
                contentContainerStyle={{
                    width: '100%',
                    paddingHorizontal: 20, 
                    flexGrow: 1,
                }}
            >
                {rewardItems.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            className="w-14 h-14 mr-5"
                            style={{
                                tintColor: reward === item.id ? '#D69006' : 'white',
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Rewards;
