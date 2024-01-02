import React, {FC} from 'react';

import {
  Button as RenuiButton,
  BottomSheet as RenuiBottomSheet,
  ButtonGroup as RenuiButtonGroup,
  ButtonProps,
  Card as RneuiCard,
  CheckBox as RenuiCheckBox,
  Icon as RneuiIcon,
  Image as RenuiImage,
  Input as RneuiInput,
  ListItem as RenuiListItem,
  Text as RneuiText,
  Chip as RneuiChip,
  ButtonGroupProps,
  Dialog as RenuiDialog,
  SearchBar as RenuiSearchBar,
} from '@rneui/themed';
import {styled, StyledComponent} from 'nativewind';
import {
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  SafeAreaView as RnSafeAreaView,
  ScrollView as RnScrollView,
  View as RnView,
  TouchableOpacity as RnTouchableOpacity,
  StatusBar,
} from 'react-native';

// @ts-ignore
export const TouchableOpacity = styled(RnTouchableOpacity);

// @ts-ignore
export const BottomSheet = styled(RenuiBottomSheet);

// @ts-ignore
export const Card = styled(RneuiCard, 'text-black dark:text-white');

// @ts-ignore
export const CheckBox = styled(RenuiCheckBox, 'text-black dark:text-white');
// @ts-ignore
export const Text = styled(RneuiText, 'text-black dark:text-white');
// @ts-ignore
export const Icon = styled(RneuiIcon);

// @ts-ignore
export const StyledIcon = styled(RneuiIcon, {
  classProps: ['color'],
});

// @ts-ignore
export const Chip = styled(RneuiChip);

export const View = styled(RnView, 'bg-white dark:bg-black');

export const Button: FC<
  ButtonProps & {
    default?: boolean;
    secondary?: boolean;
    white?: boolean;
    error?: boolean;
    secondaryTextColor?: string;
  }
> = ({...props}) => {
  // @ts-ignore
  const StyledRenuiButton = styled(RenuiButton);
  return <StyledRenuiButton {...props} />;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({...props}) => {
  // @ts-ignore
  const StyledRenuiButtonGroup = styled(RenuiButtonGroup);
  return <StyledRenuiButtonGroup {...props} />;
};

// @ts-ignore
export const Image = styled(RenuiImage);

// @ts-ignore
export const Input = styled(RneuiInput, 'text-black dark:text-white');
// @ts-ignore
export const ListItem = styled(RenuiListItem, 'text-black dark:text-white');
// @ts-ignore
export const ListItemContent = styled(
  RenuiListItem.Content as any,
  'text-black dark:text-white',
);
// @ts-ignore
export const ListItemTitle = styled(
  RenuiListItem.Title as any,
  'text-black dark:text-white',
);
// @ts-ignore
export const ListItemChevron = styled(
  RenuiListItem.Chevron as any,
  'text-black dark:text-white',
);

// export const Input: FC<InputProps & {onChange?: (value: string) => void}> = props => {
//   return <RneuiInput {...(props as any)} onChange={() => {}} onChangeText={props.onChange} />;
// };

export const ScrollView = styled(RnScrollView, 'bg-white dark:bg-black', {
  props: {
    contentContainerStyle: true,
  },
});

export const SafeAreaView = styled(RnSafeAreaView, 'bg-white dark:bg-black');
const safeAreaPaddingTop =
  Platform.OS === 'android' ? {paddingTop: StatusBar.currentHeight} : {};

export const KeyboardAvoidingView: FC<
  KeyboardAvoidingViewProps & {loading?: boolean}
> = props => {
  return (
    <StyledComponent
      component={RnSafeAreaView}
      className="bg-white dark:bg-red-300"
      style={safeAreaPaddingTop}
    >
      <StyledComponent
        component={RnKeyboardAvoidingView}
        className="white dark:black"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        {...props}>
        {props.children}
      </StyledComponent>
    </StyledComponent>
  );
};

// @ts-ignore
export const Dialog = styled(RenuiDialog, {
  props: {
    overlayStyle: true,
  },
});

// @ts-ignore
export const DialogTitle = styled(RenuiDialog.Title, {
  props: {
    titleStyle: true,
  },
});

// @ts-ignore
export const DialogActions = styled(RenuiDialog.Actions);

// @ts-ignore
export const DialogButton = styled(RenuiDialog.Button, {
  props: {
    titleStyle: true,
  },
});

// @ts-ignore
export const SearchBar = styled(RenuiSearchBar, {
  props: {
    leftIconContainerStyle: true,
    containerStyle: true,
  },
});
