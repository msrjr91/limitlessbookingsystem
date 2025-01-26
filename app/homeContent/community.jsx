import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { images } from '../../constants'; // Corrected import

const { width } = Dimensions.get('window');

const slides = [
  { id: '1', uri: images.community1, text: 'This is the first slide.' },
  { id: '2', uri: images.community2, text: 'This is the second slide.' },
  { id: '3', uri: images.community3, text: 'This is the third slide.' },
  { id: '4', uri: images.community4, text: 'This is the fourth slide.' },
  // Add more slides as needed
];

const Community = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
      {/* Image on top */}
      <Image source={item.uri} style={{ width: '100%', height: 250 }} />
      {/* Text below */}
      <Text style={{ color: '#fff', textAlign: 'center', marginTop: 10 }}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(e) => {
          const index = Math.floor(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      
      <View style={{ position: 'absolute', bottom: 10, left: '50%', transform: [{ translateX: -20 }] }}>
        <Text style={{ color: '#fff' }}>
          {currentIndex + 1} / {slides.length}
        </Text>
      </View>
    </View>
  );
};

export default Community;
