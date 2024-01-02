import {Screen, useNav} from '../../navigation/RootNavigation';
import {ScrollView, View} from 'react-native';
import {KeyboardAvoidingView, Text} from '../../components/rneui';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const SampleScreen: Screen<'Sample'> = ({route}) => {
  const navigation = useNav();
  const {t} = useTranslation();
  return (
    <KeyboardAvoidingView>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        className="bg-white h-screen">
        <View className="p-8 pb-0 pt-0 flex items-center bg-white h-full">
          <Text>Sample Screen</Text>
          <Text>{route.params.username}</Text>
          <Text>{route.params.password}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
