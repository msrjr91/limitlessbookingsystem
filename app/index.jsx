import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className='w-full h-full justify-center items-center px-5 relative'>
        <Image 
          source={images.logo}
          className='w-3/4 h-1/4' //CHANGE? 
          resizeMode='contain'
        />

        <CustomButton
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-[90%] absolute bottom-10 bg-secondary"
          textStyles={'font-regular'}
        />
        {/* Delete after implementing auth */}
        <Link href="/home" className="text-lg font-psemibold text-secondary">Skip Sign in</Link> 

      </View>
      <StatusBar
        backgroundColor='#062033'
        style='light'
      />
    </SafeAreaView>
  );
}
