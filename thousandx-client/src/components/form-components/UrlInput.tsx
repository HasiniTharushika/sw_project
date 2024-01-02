import React, {FC} from 'react';
import {Input} from '../rneui';
import {InputProps} from '@rneui/base';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  input: {borderColor: 'transparent'},
});
export const UrlInput: FC<InputProps> = props => {
  return (
    <View>
      <Input
        {...props}
        className="-mb-4 android:-mb-8 h-24 py-2"
        inputContainerStyle={styles.input}
        numberOfLines={4}
        textAlign="left"
        textAlignVertical="top"
        multiline
      />
    </View>
  );
};
