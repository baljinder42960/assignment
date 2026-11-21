
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const OnboardingScreen = () => {
  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../assets/image.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../assets/image.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../assets/image.jpg'),
      backgroundColor: '#22bcb5',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <Image source={item.image} style={styles.image} />

        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={() => Alert.alert('Welcome', 'Onboarding completed!')}
      onSkip={()=>alert("hello")}
    
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
