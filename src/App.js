import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

import { validateName,validateEmail,validatePassword,validatePhoneNumber,validateOnlyNumbers,validateOnlyAlphabets,validateDate } from './MyValidator';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [onlyNumbers, setOnlyNumbers] = useState('');
  const [onlyAlphabets, setOnlyAlphabets] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!validateName(name)) {
      Alert.alert('Invalid Name', 'Please enter a valid name');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit'
      );
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number');
      return;
    }

    if (!validateOnlyNumbers(onlyNumbers)) {
      Alert.alert('Invalid Only Numbers', 'Please enter only numbers');
      return;
    }

    if (!validateOnlyAlphabets(onlyAlphabets)) {
      Alert.alert('Invalid Only Alphabets', 'Please enter only alphabets');
      return;
    }

    if (!validateDate(date)) {
      Alert.alert(
        'Invalid Date',
        'Please enter a valid date in the format MM/DD/YYYY'
      );
      return;
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number (Only Numbers)"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Only Numbers"
        value={onlyNumbers}
        onChangeText={setOnlyNumbers}
      />
      <TextInput
        style={styles.input}
        placeholder="Only Alphabets"
        value={onlyAlphabets}
        onChangeText={setOnlyAlphabets}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (MM/DD/YYYY)"
        value={date}
        onChangeText={setDate}
      />
      <Button
        style={{
          margin: 16
        }}
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  input: {
    backgroundColor: 'green',
    margin: 8,
    padding: 8,
    borderRadius: 8
  }
});
