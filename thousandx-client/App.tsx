// import React, {FC, useEffect} from 'react';
// import {ButtonProps, createTheme, ThemeProvider} from '@rneui/themed';

// import {useColorScheme} from 'nativewind';
// import {RootNavigator} from './src/navigation/RootNavigator';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {ConnectionProvider} from '@sezenta/react-native-connection';
// import {Platform, StatusBar} from 'react-native';

// import {FormConfigProvider} from './src/components/form-components/FormConfigProvider';
// import {EventContextProvider} from './src/components/form/lib/EventContext';

// import {API_BASE} from '@env';
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import './src/assets/i18n/i18n';

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     resources: {
//       en: {
//         translation: {
//           'Welcome to React': 'Welcome to React and react-i18next',
//         },
//       },
//     },
//     lng: 'en', // if you're using a language detector, do not define the lng option
//     fallbackLng: 'en',

//     interpolation: {
//       escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     },
//   });
// console.log('API_URL', API_BASE);

// export const FONT_FAMILY = 'Poppins';

// const theme = createTheme({
//   lightColors: {
//     primary: '#38A188',
//     secondary: '#EFFAF8',
//     white: '#fff',
//     black: '#000',
//     grey0: '#767676',
//     error: '#C62B3B',
//     // info: '#BDFEF2',
//     background: '#fff',
//   },
//   darkColors: {
//     primary: '#38A188',
//     secondary: '#EFFAF8',
//     white: '#fff',
//     black: '#000',
//     grey0: '#767676',
//     error: '#C62B3B',
//     // info: '#BDFEF2',
//     background: '#000',
//   },
//   mode: 'light',
//   components: {
//     Button: (
//       props: ButtonProps & {
//         default?: boolean;
//         white?: boolean;
//         error?: boolean;
//         secondary?: boolean;
//         secondaryTextColor?: string;
//       },
//       themeColor,
//     ) => ({
//       titleStyle: {
//         fontFamily: FONT_FAMILY,
//         fontWeight: '500',
//         lineHeight: 25,
//         color: props.secondary
//           ? props.secondaryTextColor || themeColor.colors.primary
//           : props.white
//           ? themeColor.colors.black
//           : themeColor.colors.white,
//         fontSize: props.size === 'sm' ? 14 : 18,
//         marginTop: Platform.OS === 'ios' ? 3 : 0,
//       },
//       buttonStyle: {
//         borderRadius: 8,
//         backgroundColor: props.secondary
//           ? themeColor.colors.secondary
//           : props.default
//           ? themeColor.colors.grey5
//           : props.error
//           ? themeColor.colors.error
//           : props.white
//           ? themeColor.colors.white
//           : themeColor.colors.primary,
//       },
//     }),
//     ButtonGroup: {
//       textStyle: {fontFamily: FONT_FAMILY},
//       buttonStyle: {
//         borderRadius: 8,
//       },
//       containerStyle: {
//         borderWidth: 0,
//         backgroundColor: 'transparent',
//       },
//       innerBorderStyle: {color: 'transparent'},
//     },
//     Input: {
//       style: {
//         fontFamily: FONT_FAMILY,
//         paddingHorizontal: 6,
//         marginBottom: Platform.OS === 'ios' ? 10 : 0,
//       },
//       labelStyle: {
//         fontFamily: FONT_FAMILY,
//         color: '#000',
//       },
//       errorStyle: {
//         fontSize: 16,
//       },
//     },
//     Text: {
//       style: {
//         fontSize: 16,
//         lineHeight: 24,
//         fontFamily: FONT_FAMILY,
//       },
//       h1Style: {
//         lineHeight: 60,
//         fontFamily: FONT_FAMILY,
//       },
//       h2Style: {
//         lineHeight: 51,
//         fontFamily: FONT_FAMILY,
//       },
//       h3Style: {
//         lineHeight: 42,
//         fontFamily: FONT_FAMILY,
//       },
//       h4Style: {
//         lineHeight: 33,
//         fontFamily: FONT_FAMILY,
//       },
//     },
//     Icon: {
//       iconStyle: {
//         alignSelf: 'flex-start',
//       },
//     },
//     ListItem: {
//       containerStyle: {
//         backgroundColor: '#2C2C2E',
//         borderRadius: 15,
//       },
//     },
//     ListItemTitle: {
//       style: {
//         fontFamily: FONT_FAMILY,
//       },
//     },
//     CheckBox: {
//       fontFamily: FONT_FAMILY,
//       textStyle: {
//         fontWeight: '500',
//         lineHeight: 18,
//       },
//       containerStyle: {
//         backgroundColor: 'transparent',
//       },
//     },
//   },
// });

// const App: FC = () => {
//   const {colorScheme, setColorScheme} = useColorScheme();

//   useEffect(() => {
//     StatusBar.setBarStyle(
//       colorScheme === 'light' ? 'dark-content' : 'light-content',
//     );
//     if (Platform.OS === 'android') {
//       StatusBar.setBackgroundColor(colorScheme === 'light' ? '#fff' : '#000');
//       StatusBar.setTranslucent(true);
//     }
//   }, [colorScheme]);

//   // useEffect(() => {
//   //   setColorScheme('dark');
//   // }, [setColorScheme]);

//   // const getSession = useCallback(async () => {
//   //   return await AsyncStorage.getItem('@auth-session');
//   // }, []);
//   //
//   // const setSession = useCallback(async (session: string | null) => {
//   //   if (session) {
//   //     await AsyncStorage.setItem('@auth-session', session);
//   //   } else {
//   //     await AsyncStorage.removeItem('@auth-session');
//   //   }
//   // }, []);

//   return (
//     <EventContextProvider>
//       <ConnectionProvider baseUrl={API_BASE} userId={u => u?.id}>
//         <ThemeProvider theme={theme}>
//           <SafeAreaProvider>
//             <FormConfigProvider>
//               <RootNavigator />
//             </FormConfigProvider>
//           </SafeAreaProvider>
//         </ThemeProvider>
//       </ConnectionProvider>
//     </EventContextProvider>
//   );
// };

// export default App;

import { Button } from '@rneui/themed'
import React from 'react'
import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import CustomButton from './src/components/customButton'
import { Colors } from './src/utils/Colors'
import SignIn_C4 from './src/screens/SignIn_C4'

// import C4 from './src/screens/C4'
// import C5 from './src/screens/C5'

const App = () =>  {
  return (
    <View>
      <SignIn_C4/>
    </View>
)}

export default App



