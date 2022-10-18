import React from 'react';
import {
  Path,
  useController,
  useFormContext,
  FieldValues,
} from 'react-hook-form';
import {BareInput, BareInputProps} from '../BareInput/BareInput';

export const ControlledRHFInput = <T extends FieldValues>({
  name,
  onBlur,
  onFocus,
}: BareInputProps<Path<T>>) => {
  const {
    control,
    formState: {errors},
  } = useFormContext<T>();

  const {field} = useController({name, control});

  const handleOnFocus = () => {
    console.log({[name]: 'focused'});
    onBlur?.();
  };

  const handleOnBlur = () => {
    console.log({[name]: 'blurred'});
    onFocus?.();
    field.onBlur();
  };

  const error = errors[name]?.message || '';

  return (
    <BareInput
      name={name}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      errorMsg={String(error)}
      value={field?.value || ''}
      onChangeText={field.onChange}
    />
  );
};
