import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ControlledRHFInput} from '../ControlledRHFInput/ControlledRHFInput';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

export const RHFInputsScreen = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data: typeof defaultFormValues) => {
    console.log('data on submit', data);
  };

  return (
    <View>
      <FormProvider {...form}>
        <ControlledRHFInput<InputsNames> name="login" />
        <ControlledRHFInput<InputsNames> name="email" />
        <ControlledRHFInput<InputsNames> name="password" />
        <ControlledRHFInput<InputsNames> name="code" />
        <ControlledRHFInput<InputsNames> name="wrongName" />
      </FormProvider>

      <TouchableOpacity
        style={styles.button}
        onPress={form.handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </TouchableOpacity>
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
