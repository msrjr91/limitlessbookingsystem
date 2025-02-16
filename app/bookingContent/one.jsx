import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';

const One = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const scrollViewRef = useRef(null); // Create a ref for ScrollView

    // Hardcoded available times for each date
    const availableTimes = {
        "2025-02-15": {
            morning: ["10:00 AM", "11:00 AM"],
            afternoon: ["12:00 PM", "2:00 PM", "3:00 PM"],
            night: ["5:00 PM", "7:00 PM"]
        },
        "2025-02-16": {
            morning: ["9:00 AM", "10:00 AM"],
            afternoon: ["11:00 AM", "1:00 PM"],
            night: ["4:00 PM"]
        },
        "2025-02-17": {
            morning: ["8:30 AM"],
            afternoon: ["10:30 AM", "1:00 PM"],
            night: ["3:00 PM"]
        },
    };

    const handleDateSelect = (day) => {
        setSelectedDate(day.dateString);
        setSelectedTime(null); // Reset time selection when date changes
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    // Scroll to the bottom to show the selected time
    const scrollToSelected = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    // Scroll content size change handler
    const onContentSizeChange = (contentWidth, contentHeight) => {
        if (selectedTime && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
            onContentSizeChange={onContentSizeChange}
        >
            <View className="flex-1 bg-white p-4">
                <Text className="text-lg font-bold text-gray-700 mb-3">Select a Date</Text>

                {/* Calendar Component */}
                <Calendar
                    style={{ width: '100%'}}
                    onDayPress={handleDateSelect}
                    markedDates={selectedDate ? { [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } } : {}}
                    theme={{
                        selectedDayBackgroundColor: 'blue',
                        todayTextColor: 'red',
                        arrowColor: 'blue',
                    }}
                />

                {/* Available Time Slots */}
                <Text className="text-lg font-bold text-gray-700 mt-5 mb-2">Available Time Slots</Text>

                {selectedDate && availableTimes[selectedDate] ? (
                    <>
                        {/* Morning */}
                        <View className="mb-4">
                            <Text className="text-md font-semibold text-gray-700">Morning</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 10 }}>
                                {availableTimes[selectedDate].morning.map((time, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleTimeSelect(time)}>
                                        <View className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-500' : 'bg-gray-300'}`}>
                                            <Text className={`text-md ${selectedTime === time ? 'text-white' : 'text-black'}`}>{time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Afternoon */}
                        <View className="mb-4">
                            <Text className="text-md font-semibold text-gray-700">Afternoon</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 10 }}>
                                {availableTimes[selectedDate].afternoon.map((time, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleTimeSelect(time)}>
                                        <View className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-500' : 'bg-gray-300'}`}>
                                            <Text className={`text-md ${selectedTime === time ? 'text-white' : 'text-black'}`}>{time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>

                        {/* Night */}
                        <View className="mb-4">
                            <Text className="text-md font-semibold text-gray-700">Night</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 10 }}>
                                {availableTimes[selectedDate].night.map((time, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleTimeSelect(time)}>
                                        <View className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-500' : 'bg-gray-300'}`}>
                                            <Text className={`text-md ${selectedTime === time ? 'text-white' : 'text-black'}`}>{time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </>
                ) : (
                    <Text className="text-gray-500">No slots available</Text>
                )}

                {selectedTime && (
                    <Text className="text-lg font-bold text-green-600 mt-5">Selected: {selectedDate} at {selectedTime}</Text>
                )}
            </View>
        </ScrollView>
    );
};

export default One;
