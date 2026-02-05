// src/screens/Calculator.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { add, div, mul, sub } from '../utils/calculator';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState<number | string>('');

  const a = Number(input1);
  const b = Number(input2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mohit Calculator</Text>

      <TextInput
        placeholder="Input 1"
        keyboardType="numeric"
        value={input1}
        onChangeText={setInput1}
        style={styles.input}
      />

      <TextInput
        placeholder="Input 2"
        keyboardType="numeric"
        value={input2}
        onChangeText={setInput2}
        style={styles.input}
      />

      <View style={styles.row}>
        <Button label="Add" onPress={() => setResult(add(a, b))} />
        <Button label="Sub" onPress={() => setResult(sub(a, b))} />
      </View>

      <View style={styles.row}>
        <Button label="Mul" onPress={() => setResult(mul(a, b))} />
        <Button
          label="Div"
          onPress={() => {
            try {
              setResult(div(a, b));
            } catch (e: any) {
              setResult(e.message);
            }
          }}
        />
      </View>

      <Text style={styles.result}>Result: {String(result)}</Text>
    </View>
  );
};

const Button = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 4 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 12,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  buttonText: { fontWeight: '500' },
  result: { marginTop: 20, fontSize: 18, textAlign: 'center' },
});

export default Calculator;
