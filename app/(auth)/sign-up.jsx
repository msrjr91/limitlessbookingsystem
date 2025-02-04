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
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
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
        <FormField
          title="Current Password"
          value={form.currentPassword}
          handleChangeText={(e) => setform({ ...form, currentPassword: e})}
          otherStyles="mt-7 w-full"
        />
        <FormField
          title="New Password"
          value={form.newPassword}
          handleChangeText={(e) => setform({ ...form, newPassword: e})}
          otherStyles="mt-7 w-full"
          // keyboardType="email-address"
        />
        <FormField
          title="Confirm Password"
          value={form.confirmPassword}
          handleChangeText={(e) => setform({ ...form, confirmPassword: e})}
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