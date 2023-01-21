import {NavProps} from './type';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {FC, useEffect, useState} from 'react';
import Splash from '../pages/Splash';
import BaseNavigation from './BaseNavigation';

export type MainList = {
  Splash: undefined;
};

export type MainNavProps<T extends keyof MainList> = NavProps<
  MainList,
  T,
  StackNavigationProp<MainList, T>
>;
const Stack = createStackNavigator<MainList>();

const Main: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoading ? <Stack.Screen name="Splash" component={Splash} /> : null}
      <Stack.Screen name="Base" component={BaseNavigation} />
    </Stack.Navigator>
  );
};

export default Main;
