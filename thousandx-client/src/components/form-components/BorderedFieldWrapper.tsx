import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Text} from '../rneui';

type Props = {
  label?: string;
  errorMessage?: string;
};

export const BorderedFieldWrapper: FC<
  PropsWithChildren<Props & any>
> = props => {
  const {label, errorMessage, children, ...prps} = props;
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (index === 0) {
        return React.cloneElement(child, prps);
      }
      return child;
    });
  };
  return (
    <View className="w-full pb-2">
      <View className="border border-gray-500 dark:border-white p-4 rounded-xl overflow-hidden">
        {label && <Text className="text-primary mb-0">{label}</Text>}
        <View className="w-full mx-[-6px] my-[-5px]">{renderChildren()}</View>
      </View>
      {errorMessage && (
        <Text className="text-red-400 ml-4">{errorMessage ?? ''}</Text>
      )}
    </View>
  );
};
