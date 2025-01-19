import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center h-full px-4 relative'>
          
          <Image 
            source={images.logo}
            className='w-3/4 h-1/4'
            resizeMode='contain'
          />

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full absolute bottom-10"
          />

        </View>
      </ScrollView>

      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  );
}
