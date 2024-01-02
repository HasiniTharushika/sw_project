import React, {FC, PropsWithChildren} from 'react';
import Form, {MapProps} from '../form';
import {StringInput} from './StringInput';
import {UrlInput} from './UrlInput';
import {BorderedFieldWrapper} from './BorderedFieldWrapper';
import {InlineFieldWrapper} from './InlineFieldWrapper';
import {FormArrayAddButton, FormArrayRemoveButton} from './FormArrayButtons';
import Switch from '../Switch';
import {GrayFieldWrapper} from './GrayFieldWrapper';
import {DefaultFieldWrapper} from "./DefaultFieldWrapper.tsx";

const adapters = {
  string: {
    component: StringInput,
    trigger: 'onChangeText',
    validateTrigger: ['onChangeText', 'onBlur'],
  },
  email: {
    component: MapProps(StringInput, {put: {keyboardType: 'email-address'}}),
    trigger: 'onChangeText',
    validateTrigger: ['onChangeText', 'onBlur'],
  },
  phone: {
    component: MapProps(StringInput, {put: {keyboardType: 'phone-pad'}}),
    trigger: 'onChangeText',
    validateTrigger: ['onChangeText', 'onBlur'],
  },
  number: {
    component: MapProps(StringInput, {put: {keyboardType: 'number-pad'}}),
    trigger: 'onChangeText',
    validateTrigger: ['onChangeText', 'onBlur'],
  },
  url: {
    component: MapProps(UrlInput, {put: {keyboardType: 'url'}}),
    trigger: 'onChangeText',
    validateTrigger: ['onChangeText', 'onBlur'],
  },
  password: {
    component: MapProps(StringInput, {put: {secureTextEntry: true}}),
    trigger: 'onChangeText',
    validateTrigger: ['onChangeText', 'onBlur'],
  },
  radio: {
    component: Switch,
    trigger: 'onValueChange',
  },
};
export const FormConfigProvider: FC<PropsWithChildren> = props => {
  return (
    <Form.ConfigProvider
      adapters={adapters}
      wrappers={{
        default: DefaultFieldWrapper,
        inline: InlineFieldWrapper,
        bordered: BorderedFieldWrapper,
        gray: GrayFieldWrapper,
      }}
      arrayAdd={FormArrayAddButton}
      arrayRemove={FormArrayRemoveButton}>
      {props.children}
    </Form.ConfigProvider>
  );
};
