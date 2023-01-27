import {Text, ToastAndroid, View} from 'react-native';
import React, {FC} from 'react';
import {styleMain} from '../styles';
import {
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native-gesture-handler';
import {API} from '../constant';
import axios from 'axios';
import {useQuery} from 'react-query';
import {ActivityIndicator} from 'react-native-paper';

const Dashboard: FC = () => {
  const getData = async () => {
    return await axios
      .get(API + 'users')
      .then(res => {
        return JSON.parse(res as any);
      })
      .catch(er => er);
  };

  const {isLoading, data, error, isError} = useQuery('test', getData);

  console.log({data});

  if (isLoading) {
    return (
      <ActivityIndicator
        color="red"
        size={'small'}
        style={[
          styleMain.flex,
          {justifyContent: 'center', alignItems: 'center'},
        ]}
      />
    );
  }

  if (isError) {
    return ToastAndroid.show(error as any, ToastAndroid.SHORT);
  }

  return (
    <ScrollView
      style={styleMain.flex}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={getData} />
      }>
      <View>
        <Recent recentData={data} />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const Recent = ({recentData}) => {
  return (
    <FlatList
      // data={recentData}
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
