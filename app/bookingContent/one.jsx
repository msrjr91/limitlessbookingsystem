import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CustomButton from '../../components/CustomButton';

const One = ({
  trainingType,
}) => {
    const today = new Date();
    const formattedToday = today.getFullYear() + 
        '-' + String(today.getMonth() + 1).padStart(2, '0') + 
        '-' + String(today.getDate()).padStart(2, '0');
    // console.log(`Today's date is ${formattedToday}`)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedSessionType, setSelectedSessionType] = useState(null);
    const scrollViewRef = useRef(null); // Create a ref for ScrollView

    // Hardcoded available times for each date
    const availableTimes = {
        "2025-03-18": {
            am: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
            pm: ["1:00 PM", "2:00 PM", "3:00 PM","4:00 PM", "5:00 PM", "6:00 PM"],
            waitlist: ["12:00 PM"]
        },
        "2025-03-16": {
            am: ["9:00 AM", "10:00 AM", "11:00 AM"],
            pm: ["1:00 PM", "4:00 PM"],
            waitlist: []
        },
        "2025-03-17": { 
            am: ["8:30 AM", "10:30 AM",],
            pm: ["1:00 PM", "3:00 PM"],
            waitlist: []
        },
    };

    const handleDateSelect = (day) => {
        setSelectedDate(day.dateString);
        setSelectedTime(null); // Reset time selection when date changes
    };

    const handleTimeSelect = (time, sessionType) => {
        setSelectedTime(time);
        setSelectedSessionType(sessionType);
        if (scrollViewRef.current) {
            // Scroll to the bottom to show the selected time
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    const handlePress = () => {};

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View className="flex-1 bg-white">
                {/* <Text className="text-lg font-bold text-gray-700 my-1 px-4">Select a Date</Text> */}

                {/* Calendar Component */}
                <Calendar
                  style={{
                      height: 350,
                      width: '100%',
                      marginBottom: 5,
                  }}
                  minDate={formattedToday}
                  markedDates={{
                      [formattedToday]: { selected: selectedDate === formattedToday, selectedColor: 'red' },
                      ...(selectedDate ? { [selectedDate]: { selected: true, marked: true, selectedColor: '#2563EB' } } : {})
                  }}
                  onDayPress={handleDateSelect}
                  theme={{
                      todayTextColor: 'red',
                      arrowColor: 'blue',
                  }}
              />

              {selectedDate === null && selectedTime === null ? null : (
                  availableTimes[selectedDate] ? (
                      <>
                          {/* Available Time Slots */}
                          <Text className="text-lg font-bold text-gray-700 mb-2 px-5">Available Time Slots</Text>

                          {/* AM Slots */}
                          {availableTimes[selectedDate].am.length > 0 && (
                              <View className="mb-3 px-5">
                                  <Text className="text-md font-regular text-gray-700">AM</Text>
                                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5 }}>
                                      {availableTimes[selectedDate].am.map((time, index) => (
                                          <TouchableOpacity key={index} onPress={() => handleTimeSelect(time, "am")}>
                                              <View className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-500' : 'bg-gray-300'}`}>
                                                  <Text className={`text-md ${selectedTime === time ? 'text-white' : 'text-black'}`}>{time}</Text>
                                              </View>
                                          </TouchableOpacity>
                                      ))}
                                  </ScrollView>
                              </View>
                          )}

                          {/* PM Slots */}
                          {availableTimes[selectedDate].pm.length > 0 && (
                              <View className="mb-3 px-5">
                                  <Text className="text-md font-regular text-gray-700">PM</Text>
                                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5 }}>
                                      {availableTimes[selectedDate].pm.map((time, index) => (
                                          <TouchableOpacity key={index} onPress={() => handleTimeSelect(time, "pm")}>
                                              <View className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-500' : 'bg-gray-300'}`}>
                                                  <Text className={`text-md ${selectedTime === time ? 'text-white' : 'text-black'}`}>{time}</Text>
                                              </View>
                                          </TouchableOpacity>
                                      ))}
                                  </ScrollView>
                              </View>
                          )}

                          {/* Waitlist Slots */}
                          {availableTimes[selectedDate].waitlist.length > 0 && (
                              <View className="mb-3 px-5">
                                  <Text className="text-md font-regular text-gray-700">Waitlist</Text>
                                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 5 }}>
                                      {availableTimes[selectedDate].waitlist.map((time, index) => (
                                          <TouchableOpacity key={index} onPress={() => handleTimeSelect(time, "waitlist")}>
                                              <View className={`px-4 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-500' : 'bg-gray-300'}`}>
                                                  <Text className={`text-md ${selectedTime === time ? 'text-white' : 'text-black'}`}>{time}</Text>
                                              </View>
                                          </TouchableOpacity>
                                      ))}
                                  </ScrollView>
                              </View>
                          )}
                      </>
                  ) : (
                      <Text className="text-gray-500 mt-5 px-5">The schedule for {selectedDate} has not been set. Check back later!</Text>
                  )
              )}


                {selectedTime && (
                    // <Text className="text-mg font-bold text-green-800 mt-3 px-5">Reserve {trainingType} on {selectedDate} at {selectedTime}?</Text>
                    <View className='w-full items-center py-2 px-1'>
                      <CustomButton 
                        title={selectedSessionType === 'waitlist' ? "Join Waitlist" : "Confirm Session"}
                        handlePress={handlePress}
                        containerStyles={'w-[95%] bg-blue-500'}
                        textStyles={'text-white'}
                      />
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default One;
