import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setform] = useState({
    username: "",
    email: "",
    password: ""
  })

  const submit = () => {

  }

  const [isSubmitting, setisSubmitting] = useState(false)

  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className="w-full min-h-[85vh] justify-center items-center px-5">
        <Image
          source={images.logo}
          resizeMode='contain'
          className='w-3/4 h-1/4'
        />
        {/* <Text className='text-xl text-white text-semibold font-psemibold'>
          Let's get started
        </Text> */}
        <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setform({ ...form, username: e})}
          otherStyles="mt-7 w-full"
        />
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
          title="Become a member"
          handlePress={submit}
          containerStyles="mt-10 w-full"
          isLoading={isSubmitting}
        />
        
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100">
            Have an account? 
          </Text>
          <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SignUp