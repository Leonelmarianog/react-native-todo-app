import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface ICustomButton {
  text: string;
  color: string;
  bgColor: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export const CustomButton = ({
  text,
  color,
  bgColor,
  onPress,
}: ICustomButton) => {
  return (
    <View style={{ ...styles.customButtonContainer, backgroundColor: bgColor }}>
      <Pressable android_ripple={{ color: '#ffffff' }} onPress={onPress}>
        <Text style={{ ...styles.buttonText, color: color }}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  customButtonContainer: {
    borderRadius: 6,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  buttonText: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
