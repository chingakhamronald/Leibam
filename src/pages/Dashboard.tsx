import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {styleMain} from '../styles';

const Dashboard: FC = () => {
  return (
    <View style={styleMain.flex}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
