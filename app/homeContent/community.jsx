import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { images, icons } from '../../constants';
import CustomButton from '../../components/CustomButton';

const { width, height } = Dimensions.get('window');

const slides = [
  { id: '1', 
    uri: images.community1, 
    title: 'WHY IS SOCIAL INTERACTION SO IMPORTANT?', 
    text: `Social interaction is the secret ingredient to a longer, happier life, backed by compelling research. Numerous studies, including a landmark meta-analysis published in the journal "PLOS Medicine," have consistently shown that strong social ties are associated with increased life expectancy. This research highlights the significant impact of social connections on our overall well-being and longevity. Engaging in meaningful social interactions stimulates our minds, boosts emotional resilience, and reduces stress. Moreover, sharing laughter, experiences, and support with friends and loved ones provides a sense of purpose and fulfillment that can't be achieved in isolation. At Limitless, we understand the vital role that community and social support play in the pursuit of a healthier, longer life. Join our vibrant community and experience firsthand the transformative power of social interaction on your journey to longevity.`
  },
  { id: '2', 
    uri: images.community2, 
    title: 'WHY DO WE HAVE A COMMUNITY EVENT EACH MONTH?',
    text: `Having something to look forward to each month isn't just a delightful indulgence; it's a potent boost for self-esteem and overall well-being. Numerous studies, including one conducted by Dr. Amit Kumar at the University of Chicago, have highlighted the psychological benefits of anticipating positive experiences. Anticipation can create a sense of excitement and purpose, enhancing self-esteem and self-worth. At Limitless Lifestyle Community, we understand the significance of regular, enjoyable events and experiences as an essential component of a fulfilling life. Our monthly offerings are designed to provide you with exciting, enriching opportunities that not only brighten your days but also elevate your self-esteem, fostering a sense of accomplishment and empowerment. Join us and embrace the joy of looking forward to each month as a powerful tool for enhancing your overall well-being.`
  },
  { id: '3', 
    uri: images.community3, 
    title: 'MONTHLY CHALLENGES',
    text: `Our Monthly challenges are more than just fun and games; they are one of the ways we reward positive behavioural change. At Limitless, we recognize the profound impact that our monthly challenges can have on our member’s personal growth and well-being. These challenges offer a great way to encourage teamwork, self-improvement and pushing you to step out of your comfort zone, develop new habits, and break free from old unhealthy ones. Each month, you not only earn rewards but also build self-confidence, discipline, and resilience. Our challenges are not designed to reward the fastest or the strongest but to reward everyone who goes the extra mile and puts in the extra work outside of their session, to either improve themselves or help their team.`

  },
  { id: '4', 
    uri: images.community4, 
    title: 'COMMUNITY WHATSAPP GROUP',
    text: `Our WhatsApp group is the vibrant heart of our community, connecting like-minded individuals on their journey towards health and wellness. It's more than just a chat; it's a safe space for support, motivation, and inspiration. Here, you'll find instant access to a community who share your passion for fitness, nutrition, and personal growth. Our WhatsApp group fosters camaraderie, accountability, and a sense of belonging that is unmatched. Whether you're seeking advice, celebrating achievements, or simply sharing a moment of encouragement, this group is your 24/7 lifeline to a community that cares. At Limitless we believe that a strong sense of community is the cornerstone of lasting wellness.` 
  },
  { id: '5', 
    uri: images.community5, 
    title: '',
    text: `` 
  },
];

const Community = () => {

  const [isVisible, setisVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setisVisible(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={{ width: width, alignItems: 'center', marginTop: '15' }}>
      {/* Image on top */}
      <View className="relative" style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={item.uri} style={{ width: width * 0.9, height: height * 0.3, borderRadius: 10, opacity: isVisible ? 0.5 : 1}} />
        {isVisible ? (
          <Image
            source={icons.swipe}
            style={{
              position: 'absolute',
              width: 28, 
              height: 28, 
            }}
          />
        ) : ''}
      </View>
      {/* Text below */}
      <Text className='text-md font-psemibold my-5 w-full' style={{ color: '#D69006', textAlign: 'center'}}>{item.title}</Text>
      <Text className='text-md px-5' style={{ color: '#fff', textAlign: 'justify', fontSize: '12'}}>{item.text}</Text>
      {
        item.id === '5' && 
        <CustomButton 
          title='JOIN THE WAITLIST'
          handlePress={() => router.push('')}
          containerStyles='w-[90%]'
        />
      }
    </View>
  );

  return (
    <View className="w-full h-full justify-start items-center">
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
    </View>

  );
};

export default Community;
