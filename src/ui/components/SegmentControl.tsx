import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

type Props = {};

export const SegmentControl: React.FC<Props> = ({}: Props) => {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const segmentIcons = [
    require('../../../assets/images/user.png'),
    require('../../../assets/images/target.png'),
    require('../../../assets/images/file.png'),
    require('../../../assets/images/description.png'),
  ];

  const handleSegmentPress = (index: number) => {
    setActiveSegmentIndex(index);
  };

  return (
    <View style={styles.container}>
      {segmentIcons.map((icon, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            style={[
              styles.segment,
              {
                backgroundColor:
                  activeSegmentIndex === index ? '#4CAF50' : '#3A3940',
              },
            ]}
            onPress={() => handleSegmentPress(index)}>
            <Image source={icon} />
          </TouchableOpacity>
          {index < segmentIcons.length - 1 && <View style={styles.connector} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  segment: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connector: {
    right: 0,
    left: 0,
    width: 20,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#3A3940',
  },
});

export default SegmentControl;
