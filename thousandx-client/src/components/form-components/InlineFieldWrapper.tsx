import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Text} from '../rneui';

type Props = {
  label?: string;
  errorMessage?: string;
};

export const InlineFieldWrapper: FC<PropsWithChildren<Props & any>> = props => {
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
    <View className="w-full px-4 pb-2 mt-1 border-b border-b-black dark:border-b-white">
      <View className="overflow-hidden flex flex-row items-center">
        {label && <Text className="font-medium grow-0 -mb-1">{label}</Text>}
        <View className="grow">{renderChildren()}</View>
      </View>
      {errorMessage && (
        <Text className="text-red-400">{errorMessage ?? ''}</Text>
      )}
    </View>
  );
};
