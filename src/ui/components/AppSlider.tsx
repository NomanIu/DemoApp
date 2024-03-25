import Slider from '@react-native-community/slider';
import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};

export const AppSlider: React.FC<Props> = ({}: Props) => {
  const sliderRef = useRef(null);
  const bubbleRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(700);
  const [thumbOffset, setThumbOffset] = useState(0);

  const calculateThumbPosition = () => {
    if (sliderRef.current && bubbleRef.current) {
      sliderRef.current.measure((x, y, width, height, pageX) => {
        const thumbPosition = pageX + (width * (sliderValue - 100)) / 900;
        setThumbOffset(thumbPosition);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>100</Text>
      <Slider
        ref={sliderRef}
        style={styles.slider}
        minimumValue={100}
        maximumValue={1000}
        minimumTrackTintColor="#6200EE"
        maximumTrackTintColor="#3700B3"
        thumbTintColor="#3700B3"
        value={sliderValue}
        onValueChange={value => {
          setSliderValue(Math.round(value));
          calculateThumbPosition();
        }}
        onLayout={calculateThumbPosition}
      />
      <View
        ref={bubbleRef}
        style={[styles.bubbleContainer, {left: thumbOffset - 220}]}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{sliderValue}</Text>
        </View>
      </View>
      <Text style={styles.labelText}>1000</Text>
    </View>
  );
};

export default AppSlider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bubbleContainer: {
    position: 'absolute',
    top: -20,
    right: -1,
    alignItems: 'center',
  },
  bubble: {
    backgroundColor: '#6200EE',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  bubbleText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  slider: {
    height: 40,
    width: '80%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#FFFFFF',
  },
});
