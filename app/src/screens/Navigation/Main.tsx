import React, { useContext } from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '../../components/Icon/FontAwesome'
import SimpleLineIcon from '../../components/Icon/SimpleLineIcon'
import Home from '../Home/Index'
import Detail from '../Detail/Index'
import PersonalDashboard from '../Personal/Index'
import SignInScreen from '../Account/SignIn'
import About from '../About/Index'
import { AuthContext } from '../../reducers/Auth'
import { BaseColor, useTheme, useFont } from '../../configs/Theme'
import Image from '../../components/Image/Index'

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const avatar = require('../../assets/avatar.jpg')

export default function Main() {
  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="BottomTabNavigator">
        <MainStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <MainStack.Screen name="DetailItem" component={Detail} />
        <MainStack.Screen name="AccountInfo" component={AccountInfo} />
      </MainStack.Navigator>
    </>
  )
}

function AccountInfo() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View>
        <Text>Account Info</Text>
      </View>
    </SafeAreaView>
  )
}

function Job() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <View>
        <Text style={{ fontSize: 30, color: BaseColor.orangeColor }}>Job</Text>
      </View>
    </SafeAreaView>
  )
}

function BottomTabNavigator() {
  const { loginState } = useContext(AuthContext)
  const { colors } = useTheme()
  const font = useFont()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false } as any}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: { borderTopWidth: 1 },
        labelStyle: {
          fontFamily: font,
          fontSize: 12,
          paddingBottom: 4,
        },
      } as any}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="Job"
        component={Job}
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <SimpleLineIcon name="rocket" solid color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="PersonalScreen"
        component={loginState.token ? PersionalScreen : SignInScreen}
        options={{
          title: 'Personal',
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" solid color={color} size={20} />,
        }}
      />
      <BottomTab.Screen
        name="AboutUs"
        component={AboutScreen}
        options={{
          title: 'About Us',
          tabBarIcon: ({ color }: any) => <SimpleLineIcon name="location-pin" solid color={color} size={20} />,
        } as any}

      />
    </BottomTab.Navigator>
  )
}

function HomeStackScreen({ navigation }: { navigation: StackNavigationProp<any> }) {
  const { colors } = useTheme()

  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.textWhite
        },
      }}
    >
      <MainStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Welcome Salto Vietnam',
          headerRight: () => headerRight({ navigation })
        }}
      />
    </MainStack.Navigator >
  )
}

function AboutScreen({ navigation }: { navigation: StackNavigationProp<any> }) {
  const { colors } = useTheme()
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.textWhite
        },
      }}
    >
      <MainStack.Screen
        name="AboutScreen"
        component={About}
        options={{
          title: 'Welcome Salto Vietnam',
          headerRight: () => headerRight({ navigation })
        }}
      />
    </MainStack.Navigator >
  )
}

function PersionalScreen({ navigation }: { navigation: StackNavigationProp<any> }) {
  const { colors } = useTheme();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: colors.textWhite
        },
      }}
    >
      <MainStack.Screen
        name="PersonalScreen"
        component={PersonalDashboard}
        options={{
          title: 'Welcome Salto Vietnam',
          headerRight: () => headerRight({ navigation })
        }}
      />
    </MainStack.Navigator >
  )
}

function headerRight({ navigation }: { navigation: StackNavigationProp<any> }) {
  const { loginState } = useContext(AuthContext)
  return (
    loginState &&
    <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.navigate('PersonalScreen')}>
      <Image style={{
        width: 36,
        height: 36,
        borderRadius: 18
      }} source={avatar} />
    </TouchableOpacity>
  )
}