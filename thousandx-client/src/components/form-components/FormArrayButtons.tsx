import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from '../rneui';
import Icon from 'react-native-vector-icons/AntDesign';
import {styled} from 'nativewind';

const StyledIcon = styled(Icon);
type Props = {
  text: string;
};

export const FormArrayAddButton: FC<Props> = props => {
  return (
    <View className="w-full p-2 flex flex-row">
      <StyledIcon className="text-primary text-lg" name="plus" />
      <Text className="text-primary">{props.text}</Text>
    </View>
  );
};

export const FormArrayRemoveButton: FC = () => {
  return (
    <View className="w-full p-2 flex flex-row">
      <StyledIcon className="text-red-500 text-lg" name="close" />
    </View>
  );
};
