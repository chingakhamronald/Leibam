import {NavProps} from './type';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {FC} from 'react';
import Splash from '../pages/Splash';

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
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Main;
