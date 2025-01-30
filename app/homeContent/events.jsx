import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import EventCard from '../../components/EventCard'
import { icons, images } from '../../constants'

const Events = () => {
  return (
    <View className="h-full w-full items-center mt-5">
      {/* <Text className="text-xl mb-2 font-psemibold text-white">Upcoming Events</Text> */}
      <View>
        <ScrollView contentContainerStyle={{ alignItems: 'center', }} showsVerticalScrollIndicator={false}>
          <View>
            <EventCard 
              day='Sat'
              date='22 Feb'
              location='Liverpool'
              title='Nicky Nook Hike'
              description={`Join us as we kick off the year with the return of the Nicky Nook Hike in Lancashire! Whether you're a seasoned hiker or a first timer, this is a perfect day out for all, featuring a scenic and easy 5.6 km trail (approximately 2 hours).`}
              image={images.event1}
              readyToBuy={true}
            />
            <EventCard 
              day='Sun'
              date='23 Mar'
              location='Liverpool'
              title='Liverpool Half Marathon'
              description={`Join us for the Liverpool Half Marathon on Sunday, 23rd March, as we run to raise money for Alder Hey Children’s Charity for the third year in a row! Last year we had 20 Limitless participants, let's beat that number this year!`}
              image={images.event2}
              readyToBuy={false}
            />
            <EventCard 
              day='Sat'
              date='29 Mar'
              location='Liverpool'
              title='Limitless Bowling'
              description={`Join us on Saturday, 29th March for an exciting afternoon of bowling with a twist! Get ready for some friendly competition and plenty of prizes to be won.`}
              image={images.event3}
              readyToBuy={true}
            />
            <EventCard 
              day='Sat'
              date='19 Apr'
              location='Liverpool'
              title={`Thor's Cave Circular Hike`}
              description={`Get ready for a new adventure as we take on the Thor’s Cave Circular on Saturday, 19th April! This 9km moderate hike features an elevation gain of 420m and offers stunning views of Staffordshire, making it perfect for all abilities, including families.`}
              image={images.event4}
              readyToBuy={true}
            />
            <EventCard 
              day='Sat'
              date='26 Apr'
              location='Cockerham'
              title={`Limitless Parachute Jump`}
              description={`Do it for the kids👀 Let's raise a load of money and jump out a plane together at 15,000 feet!`}
              image={images.event5}
              readyToBuy={true}
            />
            <EventCard 
              day='Sun'
              date='27 Apr'
              location='Liverpool'
              title={`Manchester Marathon`}
              description={`We would love your support on the day! Help us cross that finish line and join us in celebrating afterwards in Manchester.`}
              image={images.event6}
              readyToBuy={true}
            />
            <View className="items-center my-10">
              <Text className="text-white font-regular text-xs">Check back later for more events!</Text>
            </View>
            <View className="h-[1px] bg-[#080E13] my-10"/>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Events