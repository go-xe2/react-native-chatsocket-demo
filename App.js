/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import RNChatsocket from 'react-native-chatsocket';

console.log('=====RNChatsocket>>.', RNChatsocket);
const App: () => React$Node = () => {
  const socketVersion = RNChatsocket.Version();
  return (
    <>
      <View>
        <Text>chatSocket Version:{ socketVersion}</Text>
      </View>
    </>
  );
};

export default App;
