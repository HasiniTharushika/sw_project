import React, {useState} from 'react';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';

const Switch: React.FC<{
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}> = ({value, onValueChange, ...props}) => {
  const [switchAnim] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    Animated.timing(switchAnim, {
      toValue: value ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    if (onValueChange) {
      onValueChange(!value);
    }
  };

  const switchTrackColor = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['grey', '#34c759'],
  });

  const switchThumbColor = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'white'],
  });

  const translateX = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <View className="mt-1" {...props}>
      <TouchableWithoutFeedback onPress={toggleSwitch}>
        <Animated.View
          className="w-12 h-7 rounded-full justify-center p-0.5"
          style={[{backgroundColor: switchTrackColor}]}>
          <Animated.View
            className="w-6 h-6 rounded-full absolute"
            style={[
              {
                backgroundColor: switchThumbColor,
                transform: [
                  {
                    translateX: translateX,
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Switch;
