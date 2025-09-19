// ColorChangerApp.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Change Background Color</Text>
      <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor('white')}>
      <Text style={styles.buttonText}>Default (white)</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor('lightgreen')}>
      <Text style={styles.buttonText}>light green</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor('lightblue')}>
      <Text style={styles.buttonText}>light blue</Text>
    </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 20,
    elevation: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default ColorChangerApp;

/*import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="Default (White)" onPress={() => setBackgroundColor('white')} />
      <Button title="Light Blue" onPress={() => setBackgroundColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBackgroundColor('lightgreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorChangerApp;*/