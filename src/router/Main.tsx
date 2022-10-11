import {NavProps} from './type';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {FC, useEffect, useState} from 'react';
import Splash from '../pages/Splash';
import Dashboard from '../pages/Dashboard';

export type MainList = {
  Splash: undefined;
  Dashboard: undefined;
};

export type MainNavProps<T extends keyof MainList> = NavProps<
  MainList,
  T,
  StackNavigationProp<MainList, T>
>;
const Stack = createStackNavigator<MainList>();

const Main: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, [isLoading]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Main;
