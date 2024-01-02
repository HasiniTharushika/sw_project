import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {Text} from '../rneui';

type Props = {
  label?: string;
  errorMessage?: string;
};

export const DefaultFieldWrapper: FC<
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
    <View className="w-full pb-2 ">
      <View className="overflow-hidden flex flex-col">
        {label && <Text className="font-medium grow-0 -mb-2">{label}</Text>}
        <View className="grow border-b border-b-black dark:border-b-white">
          {renderChildren()}
        </View>
      </View>
      <Text className="text-red-500 text-sm">{errorMessage ?? ' '}</Text>
    </View>
  );
};
