import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';

const One = () => {
    const today = new Date();
    const formattedToday = today.getFullYear() + 
        '-' + String(today.getMonth() + 1).padStart(2, '0') + 
        '-' + String(today.getDate()).padStart(2, '0');
    // console.log(`Today's date is ${formattedToday}`)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const scrollViewRef = useRef(null); // Create a ref for ScrollView

    // Hardcoded available times for each date
    const availableTimes = {
        "2025-02-18": {
            morning: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
            afternoon: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
            night: ["4:00 PM", "5:00 PM", "6:00 PM"]
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
        if (scrollViewRef.current) {
            // Scroll to the bottom to show the selected time
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View className="flex-1 bg-white">
                <Text className="text-lg font-bold text-gray-700 my-1 px-4">Select a Date</Text>

                {/* Calendar Component */}
                <Calendar
                  style={{
                      height: 300,
                      width: '100%',
                      marginBottom: 5,
                  }}
                  minDate={formattedToday} // Ensures today is selectable
                  markedDates={{
                      [formattedToday]: { selected: selectedDate === formattedToday, marked: true, selectedColor: 'red' },
                      ...(selectedDate ? { [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } } : {})
                  }}
                  onDayPress={handleDateSelect}
                  // markedDates={selectedDate ? { [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' } } : {}}
                  theme={{
                      selectedDayBackgroundColor: 'blue',
                      todayTextColor: 'red',
                      arrowColor: 'blue',
                  }}
              />

                {/* Available Time Slots */}
                <Text className="text-lg font-bold text-gray-700 mb-2 px-5">Available Time Slots</Text>

                {selectedDate && availableTimes[selectedDate] ? (
                    <>
                        {/* Morning */}
                        <View className="mb-3 px-5">
                            <Text className="text-md font-regular text-gray-700">Morning</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5 }}>
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
                        <View className="mb-3 px-5">
                            <Text className="text-md font-regular text-gray-700">Afternoon</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5 }}>
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
                        <View className="px-5">
                            <Text className="text-md font-regular text-gray-700">Night</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5 }}>
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
                    <Text className="text-lg font-bold text-green-800 my-2 px-5">Selected: {selectedDate} at {selectedTime}</Text>
                )}
            </View>
        </ScrollView>
    );
};

export default One;
