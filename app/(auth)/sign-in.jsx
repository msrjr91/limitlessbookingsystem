import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const submit = () => {

  }

  const [isSubmitting, setisSubmitting] = useState(false)

  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className="w-full min-h-[85vh] justify-center items-center px-5 relative">
        <Image
          source={images.logo}
          resizeMode='contain'
          className='w-3/4 h-1/4 absolute top-0'
        />

        <View className='w-full'>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e})}
            otherStyles="mt-7 w-full"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e})}
            otherStyles="mt-7 w-full"
          />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="bg-secondary mt-10 w-full"
            textStyles={'font-pregular'}
            isLoading={isSubmitting}
          />     
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">
              Don't have an account? 
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn