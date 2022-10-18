import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {FieldInputProps, FieldMetaProps} from 'formik';

export interface BareInputProps<T> extends TextInputProps {
  name: T;
  onBlur?: FieldInputProps<any>['onBlur'];
  onFocus?: () => void;
  errorMsg?: FieldMetaProps<any>['error'];
}

export const FormikBareInput = <T extends string>({
  errorMsg,
  name,
  onBlur,
  onFocus,
  value,
  onChangeText,
}: BareInputProps<T>) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text>{name}</Text>
        <TextInput
          style={styles.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChangeText}
          value={value}
        />
      </View>

      {!errorMsg?.length ? null : (
        <View>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#e1eaeb',
    borderRadius: 8,
    padding: 5,
    marginTop: 3,
  },
  inputWrapper: {
    marginTop: 20,
  },
  error: {
    color: 'red',
  },
});
