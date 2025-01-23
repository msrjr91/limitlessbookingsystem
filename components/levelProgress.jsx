// bug in here somewhere...???

import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';

const LevelProgress = ({ points, maxPoints }) => {
  const [currentLevel, setCurrentLevel] = useState(8); // Example starting level
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const progress = points / maxPoints; // Calculate progress percentage

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress, // Progress value between 0 and 1
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start(() => {
      // If user levels up, reset progress and increment level
      if (points >= maxPoints) {
        setCurrentLevel((prevLevel) => prevLevel + 1); // Increment level
        animatedProgress.setValue(0); // Reset progress animation
      }
    });
  }, [points]);

  const width = animatedProgress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'], // Adjust the width of the bar
  });

  return (
    <View style={'items-center p-5'}>
      {/* Level Text */}
      <Text style={'text-lg font-bold text-gray-700 mb-2'}>
        Level {currentLevel}
      </Text>

      {/* Progress Bar Container */}
      <View style={'w-full h-5 bg-gray-300 rounded-full overflow-hidden mb-3'}>
        {/* Animated Progress Bar */}
        <Animated.View
          style={[
            'h-full bg-yellow-500 rounded-full',
            { width }, // Animated width
          ]}
        />
      </View>

      {/* Points Text */}
      <Text style={'text-sm text-gray-600'}>
        {points} / {maxPoints} XP
      </Text>
    </View>
  );
};

export default LevelProgress;
