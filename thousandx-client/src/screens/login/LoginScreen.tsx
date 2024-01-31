import {Screen, useNav} from '../../navigation/RootNavigation';
import {ScrollView, View} from 'react-native';
import {Button, KeyboardAvoidingView, Text} from '../../components/rneui';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Form from '../../components/form';

export const LoginScreen: Screen<'Login'> = ({route}) => {
  const navigation = useNav();
  const {t} = useTranslation();
  const [form] = Form.useForm();
  return (
    <KeyboardAvoidingView>
      <ScrollView keyboardShouldPersistTaps={'handled'} className="h-screen">
        <View className="p-4 pb-0 pt-0 flex bg-white h-full">
          <Text className="text-center text-xl font-bold">Login</Text>
          <Form
            form={form}
            onFinish={value => {
              navigation.navigate('Sample', value);
            }}>
            <Form.Items
              schema={[
                {
                  id: 'name',
                  type: 'email',
                  name: 'Name',
                  props: {placeholder: 'Name'},
                  options: {
                    rules: [
                      {required: true, message: 'Name is required'},
                    ],
                  },
                },
                {
                  id: 'username',
                  type: 'email',
                  name: 'Username',
                  props: {placeholder: 'Email address'},
                  options: {
                    rules: [
                      {required: true, message: 'Username is required'},
                      {
                        type: 'email',
                        message: 'Username should be a valid email',
                      },
                    ],
                  },
                },
                {
                  id: 'password',
                  type: 'password',
                  name: 'Password',
                  props: {placeholder: 'Password'},
                  options: {
                    rules: [{required: true, message: 'Password is required'}],
                  },
                },
              ]}
            />
          </Form>
          <Button title="Login" onPress={() => form.submit()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
