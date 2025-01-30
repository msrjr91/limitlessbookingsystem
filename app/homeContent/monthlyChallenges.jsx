import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MonthlyChallenge from '../../components/MonthlyChallenge'

const MonthlyChallenges = () => {
  return (
    <View className="h-full w-full items-center mt-5 bg-white">
      <View>
        <ScrollView  contentContainerStyle={{ alignItems: 'center', }} showsVerticalScrollIndicator={false}>
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 5,
          }}>
            <Text className="text-xl font-psemibold">October 2024</Text>
            <MonthlyChallenge 
              title={`Leg Press Challenge`}
              description={`How many reps on the leg press can you do in 2 minutes? Your body weight is the weight you’re pushing! The winner will receive a free tub of protein!`}
              completed={false}
            />
            <Text className="text-xl font-psemibold">September 2024</Text>
            <MonthlyChallenge 
              title={`Bench Press Challenge`}
              description={`How many reps on the leg press can you do in 2 minutes? Your body weight is the weight you’re pushing! The winner will receive a free tub of protein!`}
              completed={true}
            />
            <Text className="text-xl font-psemibold">August 2024</Text>
            <MonthlyChallenge 
              title={`Team Steps Challenge`}
              description={`How many reps on the leg press can you do in 2 minutes? Your body weight is the weight you’re pushing! The winner will receive a free tub of protein!`}
              completed={true}
            />
            <Text className="text-xl font-psemibold">July 2024</Text>
            <MonthlyChallenge 
              title={`Sample Challenge`}
              description={`Do adipisicing do est ut dolor eu aliquip dolor voluptate. Ad deserunt in consequat mollit commodo laboris aliqua ullamco. Mollit anim culpa labore dolor laboris nostrud incididunt eu dolore.`}
              completed={true}
            />
            <View className="items-center my-10">
              <Text className="text-primary font-regular text-xs">No more challenges!</Text>
              <View className="h-[1px] bg-[#080E13] my-10"/>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default MonthlyChallenges