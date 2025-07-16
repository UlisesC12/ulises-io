import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const myName = 'Ulises';
  const myAge = 26;
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Hello, soy {myName} y tengo {myAge} años</ThemedText>
      <ThemedText>Esta es una TODO App</ThemedText>
      <ThemedText>TODOs:</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
