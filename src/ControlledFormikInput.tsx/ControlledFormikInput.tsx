import React from 'react';
import {useFormikContext, FormikValues, useFormik} from 'formik';
import {BareInputProps} from '../BareInput/BareInput';
import {FormikBareInput} from '../BareInput/FormikBareInput';

export const ControlledFormikInput = <T extends FormikValues>({
  name,
  onFocus,
}: BareInputProps<keyof T>) => {
  const {values, handleChange, handleBlur, errors} = useFormikContext<T>();

  const handleOnFocus = () => {
    console.log({[name]: 'focused'});
    onFocus?.();
  };

  const error = errors.name || '';

  return (
    <FormikBareInput
      name={String(name)}
      onBlur={() => handleBlur(name)}
      onFocus={handleOnFocus}
      errorMsg={String(error)}
      value={values.name}
      onChangeText={handleChange(name)}
    />
  );
};
