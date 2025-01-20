import { Image, View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const TAB_BAR_HEIGHT = SCREEN_HEIGHT * 0.15; // 15% of the screen height
const ICON_SIZE = TAB_BAR_HEIGHT * 0.25; // Icon size is 40% of the tab bar height
const FONT_SIZE = TAB_BAR_HEIGHT * 0.07

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex-1 items-center justify-center gap-2 w-[25vw]">
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={{ width: ICON_SIZE, height: ICON_SIZE }}
                // className='w-8 h-8'
            />
            <Text 
                className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color, fontSize: FONT_SIZE }}
                // style={{ 
                //     color: color,
                // }}
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
                    backgroundColor: '#062033',
                    borderTopWidth: 1, 
                    borderTopColor: '#232522',
                    height: '12%',
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
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="create"
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            name="Create"
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