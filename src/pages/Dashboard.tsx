import {Text, View} from 'react-native';
import React, {FC} from 'react';
import {styleMain} from '../styles';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const Dashboard: FC = () => {
  return (
    <ScrollView style={styleMain.flex}>
      <View>
        <Recent />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const Recent = () => {
  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <View>
            <Text>Recent Song</Text>
          </View>
        );
      }}
    />
  );
};
