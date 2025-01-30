import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Name: ');
  const [number, onChangeNumber] = React.useState('');
  const [text1, onChangeText1] = React.useState('Address: ');
  const [text2, onChangeText2] = React.useState('School: ');
  const [text3, onChangeText3] = React.useState('Course: ');
  const [text4, onChangeText4] = React.useState('Email: ');
  const [text5, onChangeText5] = React.useState('Contact No: ');
  const [value, onChangeText6] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Icon name="account-circle" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Name"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="accessibility" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="AGE"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="home" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            value={text1}
            placeholder="Address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="school" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            value={text2}
            placeholder="School"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="book" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={text3}
            placeholder="Course"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText4}
            value={text4}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="phone" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText5}
            value={text5}
            placeholder="Contact No"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="info" size={24} color="black" style={styles.icon} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText6(text)}
            value={value}
            style={[styles.textInput, {margin: 1, borderWidth: 1, padding: 10, borderColor: 'blue'}]}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  textInput: {
    height: 100,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
});

export default TextInputExample;