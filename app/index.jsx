import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from "../constants"
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%'
        }}

      >
        <View className="w-full items-center min-h-[85vh] px-4 justify-center">
           
          <Image 
            source={images.logo}
            className="w-[180px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="w-[380px] w-full h-[300]"
            resizeMode="contain"
          />

          <View
            className="relative mt-5"
          >
            <Text
              className="text-white text-center text-3xl font-bold"
            >
              Discover Endless Possibilities with {" "}
              <Text className="text-secondary-200">
                Aora
              </Text>
              </Text>
              <Image 
                source={images.path}
                className="w-[70px] h-[15px] absolute right-0 -bottom-1"
                resizeMode='contain'
              />


          </View>
          <Text
            className="text-sm  font-pregular text-gray-100 mt-7 text-center"
          >Where Creativity meets innovation: embark on blah blah blah with Aora</Text>
        
        <CustomButton 
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
        />
        </View>
      </ScrollView>

      <StatusBar backgro undColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20, 
    borderBlockColor: 'red', 
    borderColor: 'blue',  
    alignItems: 'center',
    justifyContent: 'center',
  }
});
