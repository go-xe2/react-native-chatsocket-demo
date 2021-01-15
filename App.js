/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';

import chatSocket from 'react-native-chatsocket';
import DeviceInfo from 'react-native-device-info';

const getDeviceInfo = () => {
  const uuid = DeviceInfo.getUniqueId();
  const brand = DeviceInfo.getBrand();
  const model = DeviceInfo.getModel();
  const sysVersion = DeviceInfo.getSystemVersion();
  const sdkVersion = DeviceInfo.getVersion();
  const info = {uuid, brand, model, sysVersion, sdkVersion};
  return info;
};

const App: () => React$Node = () => {
  const socketVersion = chatSocket.getVersion();
  const imHost = chatSocket.getIMHost();
  const appKey = chatSocket.getAppKey();
  const appSecret = chatSocket.getAppSecret();
  const deviceId = chatSocket.getDeviceID();
  const saveInfo = async () => {
    await chatSocket.saveUserToken(
      'eyJkYXRhIjp7ImF1dGhvcl9pZCI6IjVmNzJkYjY1YWRjOTRmNmYyN2E2MDlhMiIsImdyb3VwIjoiYWRtaW4iLCJvcHRzIjoiIiwidXNlcl9pZCI6IjEifSwiZXhwaXJlIjoxNjEwNTAwMDQwLCJzaWduIjoiYjUyMWM0MDJhZGMxZjY5MTkwMGFjYjI4NDZiMDM4YTA5OWFhYTRlYSJ9',
    );
    await chatSocket.saveUserID('1');
    await chatSocket.saveUserNickName('管理员');
    await chatSocket.saveUserAvatarUrl('http://www.baidu.com/1.jpg');
    // 保存设备信息
    // const info = getDeviceInfo();
    // const res = await chatSocket.saveDeviceInfo(info);
    // console.log('===== saveDeviceInfo:', res);
  };
  saveInfo();
  const token = chatSocket.getUserToken();
  const userId = chatSocket.getUserID();
  const userNickName = chatSocket.getUserNickName();
  const userAvatarUrl = chatSocket.getUserAvatarUrl();
  chatSocket
    .getDeviceInfo()
    .then((res) => {
      console.log('读取设备信息:', res);
    })
    .catch((err) => {
      console.log('读取设备信息出错:', err);
    });
  return (
    <>
      <View>
        <Text>chatSocket Version:{socketVersion}</Text>
        <Text>imHost:{imHost}</Text>
        <Text>appKey:{appKey}</Text>
        <Text>appSecret:{appSecret}</Text>
        <Text>deviceId:{deviceId}</Text>
        <Text>token:{token}</Text>
        <Text>userId:{userId}</Text>
        <Text>nickName:{userNickName}</Text>
        <Text>userAvatarUrl:{userAvatarUrl}</Text>
      </View>
    </>
  );
};

export default App;
