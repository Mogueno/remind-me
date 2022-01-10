import React from 'react';
import {Text, View} from 'react-native';
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <Text>
        See my current quotes and settings for the active or inactive reminder
      </Text>
    </View>
  );
};

export default Home;
