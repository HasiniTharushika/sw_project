import React, {FC} from 'react';
import {Input} from '../rneui';
import {InputProps} from '@rneui/base';
import {StyleSheet, View} from 'react-native';
import classnames from 'classnames';

const styles = StyleSheet.create({
  input: {borderColor: 'transparent'},
});
export const StringInput: FC<InputProps> = props => {
  return (
    <View
      className={classnames('-mb-10 -mx-3', {
        '-mb-8': props.multiline,
      })}>
      <Input {...props} inputContainerStyle={styles.input} />
    </View>
  );
};
