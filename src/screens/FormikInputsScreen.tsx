import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {ControlledFormikInput} from '../ControlledFormikInput.tsx/ControlledFormikInput';
import {FormikBareInput} from '../BareInput/FormikBareInput';

const defaultFormValues = {
  login: '',
  email: '',
  password: '',
  code: 0,
};

const formSchema = yup.object().shape({
  login: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  code: yup.number().required(),
});

type InputsNames = Record<keyof typeof defaultFormValues, string>;

export const FormikInputsScreen = () => {
  const onSubmit = (data: typeof defaultFormValues) =>
    console.log('data', data);

  return (
    <View>
      <Formik
        initialValues={defaultFormValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
        enableReinitialize>
        {({handleSubmit, handleBlur, handleChange, values}) => (
          <View>
            <ControlledFormikInput<InputsNames>
              name="login"
              onChangeText={handleChange('login')}
            />
            <ControlledFormikInput<InputsNames> name="email" />
            <ControlledFormikInput<InputsNames> name="password" />
            <ControlledFormikInput<InputsNames> name="code" />
            <ControlledFormikInput<InputsNames> name="wrongName" />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: '#b5f5f7',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
});
