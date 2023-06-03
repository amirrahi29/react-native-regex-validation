import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [onlyNumbers, setOnlyNumbers] = useState('');
  const [onlyAlphabets, setOnlyAlphabets] = useState('');
  const [date, setDate] = useState('');

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Phone number must be 10 digits and can include optional dashes or spaces
    const phoneNumberRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const validateOnlyNumbers = (onlyNumbers) => {
    const onlyNumbersRegex = /^\d+$/;
    return onlyNumbersRegex.test(onlyNumbers);
  };

  const validateOnlyAlphabets = (onlyAlphabets) => {
    const onlyAlphabetsRegex = /^[A-Za-z]+$/;
    return onlyAlphabetsRegex.test(onlyAlphabets);
  };

  const validateDate = (date) => {
    // Date must be in the format MM/DD/YYYY and should be a valid date
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return dateRegex.test(date);
  };

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

    // All fields are valid, proceed with form submission or further processing
    // ...
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
