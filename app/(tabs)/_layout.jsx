import { Image, View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const TAB_BAR_HEIGHT = SCREEN_HEIGHT * 0.15; // 15% of the screen height
const ICON_SIZE = TAB_BAR_HEIGHT * 0.2; // Icon size is 40% of the tab bar height
const FONT_SIZE = TAB_BAR_HEIGHT * 0.07

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex-1 items-center justify-center gap-2 w-[25vw]">
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={{ width: ICON_SIZE, height: ICON_SIZE }}
            />
            <Text 
                className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color, fontSize: FONT_SIZE }}
            >
                { name }
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#0D2031',
                    borderTopWidth: 1, 
                    borderTopColor: '#0D2031',
                    height: '10%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="schedule"
                options={{
                    title: 'Schedule',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.schedule}
                            color={color}
                            name="Schedule"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="book"
                options={{
                    title: 'Book',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.addsession}
                            color={color}
                            name="Book"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="notifications"
                options={{
                    title: 'Notifications',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.notification}
                            color={color}
                            name="Notifications"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
        
    </>
  )
}

export default TabsLayout