import { View, Text, Dimensions, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        id: '1',
        title: 'Muscle Mass',
        icon: icons.trendUp,
    },
    {
        id: '2',
        title: 'Body Fat',
        icon: icons.trendDown
    },
    {
        id: '3',
        title: 'Body Weight',
        icon: icons.weight
    },
    {
        id: '4',
        title: 'Weekly Visits',
        icon: icons.barchart,
    }
]

const ProfileSlides = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start at slide 0

    // Render each slide
    const renderSlide = ({ item }) => (
        <View className='h-full w-full items-center relative'>
            <View className='w-full h-full items-center flex-row'>
                <Text className='text-white w-full font-lg font-psemibold'>{item.title}</Text>
                <Image 
                    source={item.icon} 
                    resizeMode='contain'
                    style={{
                        height: height * 0.03,
                        width: width * 0.05
                    }}
                />
            </View>

            {/* Dots Indicator */}
            <View className='flex-row items-center justify-center w-full absolute bottom-0'>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );

    return (
        <View className='w-[95%] h-[95%] border border-red-500 items-center'>
            <FlatList 
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderSlide}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={(e) => {
                    const index = Math.floor(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
            />
        </View>
    );
}

// Styles for the dots
const styles = {
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
    activeDot: {
        backgroundColor: '#D69006', // Active dot color
    },
    inactiveDot: {
        backgroundColor: '#ccc', // Inactive dot color
    }
};

export default ProfileSlides;
