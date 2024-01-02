import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Text} from '../rneui';

type Props = {
  label?: string;
  errorMessage?: string;
};

export const GrayFieldWrapper: FC<PropsWithChildren<Props & any>> = props => {
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
    <View className="w-full px-4 pb-3 mt-3 border-b border-b-black dark:border-b-white">
      <View>
        {label && <Text className="font-medium grow-0 mb-2">{label}</Text>}
        <View className="bg-gray-200 dark:bg-greycard rounded-lg">
          {renderChildren()}
        </View>
      </View>
      {errorMessage && (
        <Text className="mt-2 text-red-400">{errorMessage ?? ''}</Text>
      )}
    </View>
  );
};
