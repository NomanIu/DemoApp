import {Picker} from '@react-native-picker/picker';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppSlider from '../components/AppSlider';
import {SegmentControl} from '../components/SegmentControl';

type Props = {
  data: any;
  isSelectedBox: (data: any) => void;
  handleTopicChange: (value: any) => void;
  setSelectedTitle: Dispatch<SetStateAction<any | undefined>>;
  selectedTitle: string;
  selectedTopic: string;
  topics: any;
};

export const HomeView: React.FC<Props> = ({
  isSelectedBox,
  data,
  handleTopicChange,
  setSelectedTitle,
  selectedTitle,
  selectedTopic,
  topics,
}: Props) => {
  const screenWidth = Dimensions.get('window').width;
  const pickerWidth = screenWidth - 40;

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.mainContainer}>
        <SegmentControl />

        <View style={{marginTop: 40}}>
          <Text style={styles.contentLabel}>Content type</Text>
          <Text style={styles.contentTypeLabel}>
            Choose a content type that best fits your needs.
          </Text>
        </View>
        <View style={styles.separator} />

        <View
          style={{
            marginHorizontal: 30,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.questionLabel}>
            What type of content are you creating?
          </Text>

          <View style={styles.topicsMainContainer}>
            {data?.map(_item => (
              <Pressable
                onPress={() => {
                  isSelectedBox(_item);
                  handleTopicChange(_item.title);
                }}
                style={[
                  styles.topicsContainer,
                  {backgroundColor: _item?.isSelected ? '#523FD7' : '#000'},
                ]}>
                <Text style={{color: '#ffffff'}}>{_item?.title}</Text>
              </Pressable>
            ))}
          </View>

          <View>
            <Text style={{color: 'white', marginTop: 30}}>
              Which type of {selectedTopic ? selectedTopic : 'Fun'} content are
              you creating?
            </Text>

            {selectedTopic !== '' && (
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedTitle}
                  style={[styles.picker, {width: pickerWidth - 40}]}
                  onValueChange={itemValue => setSelectedTitle(itemValue)}>
                  {topics[selectedTopic].map((title, index) => (
                    <Picker.Item
                      key={index}
                      label={title}
                      value={title}
                      color="white"
                      style={{backgroundColor: '#1E1D25'}}
                    />
                  ))}
                </Picker>
                <Image
                  source={require('../../../assets/images/arrow_down.png')}
                  width={20}
                  height={20}
                  style={styles.arrowIcon}
                />
              </View>
            )}

            <Text style={styles.sliderLabel}>
              Set the number of words for output text.
            </Text>

            <View style={styles.sliderContainer}>
              <AppSlider />
            </View>
          </View>
        </View>

        <Pressable style={styles.buttonContainer}>
          <Text>Next</Text>
          <Image source={require('../../../assets/images/arrow_right.png')} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {alignItems: 'center', backgroundColor: '#12111A', flex: 1},
  navigationIcon: {marginTop: 20},
  picker: {
    height: 50,
    backgroundColor: '#1E1D25',
  },
  arrowIcon: {
    position: 'absolute',
    right: 10,
    top: 18,
  },
  contentLabel: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
    color: '#ffffff',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#D0CFD1',
    width: '80%',
    marginTop: 30,
  },
  contentTypeLabel: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#D0CFD1',
  },
  questionLabelContainer: {
    alignSelf: 'flex-start',
    marginTop: 40,
    paddingLeft: 30,
  },
  questionLabel: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#ffffff',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 20,
  },
  topicsMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  topicsContainer: {
    borderColor: '#616066',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 6,
  },
  pickerContainer: {
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    overflow: 'hidden',
  },
  sliderLabel: {color: 'white', marginTop: 30},
  sliderContainer: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  slider: {
    width: '70%',
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
  },
});
