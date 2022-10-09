import React, {FC} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Container from './src/container/Container';
import {SafeAreaView, StyleSheet} from 'react-native';

const ProviderWrapper: FC<{children?: React.ReactElement}> = ({children}) => {
  return (
    <PaperProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <ProviderWrapper>
      <SafeAreaView style={styles.flexGrow1}>
        <Container />
      </SafeAreaView>
    </ProviderWrapper>
  );
};

export default App;

const styles = StyleSheet.create({
  flexGrow1: {
    flexGrow: 1,
  },
});
