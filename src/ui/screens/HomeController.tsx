import React, {FC, useCallback, useLayoutEffect, useState} from 'react';
import {HomeView} from './HomeView';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../routes/HomeStack';
import {Image, Text, View} from 'react-native';
import _ from 'lodash';

type Props = {};

type ConversationNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const data = [
  {id: 1, title: 'Fun', isSelected: true},
  {id: 2, title: 'Education', isSelected: false},
  {id: 3, title: 'Sports', isSelected: false},
  {id: 4, title: 'News', isSelected: false},
  {id: 5, title: 'Investment', isSelected: false},
  {id: 6, title: 'Facts', isSelected: false},
];

const topics = {
  Fun: [
    'Board games revival',
    'Comedy trends',
    'Amusement parks',
    'Escape rooms',
    'Street performances',
    'Online challenges',
    'Festivals impact',
    'Crafting movement',
    'Social gaming',
    'Virtual reality',
  ],
  Education: [
    'Gamified learning',
    'Education systems',
    'Bilingual benefits',
    'Standardized testing',
    'Arts in schools',
    'Tech bootcamps',
    'Homeschooling dynamics',
    'Mentorship importance',
    'Educational equity',
    'Mobile learning',
  ],
  Sports: [
    'Sports medicine',
    'Team sociology',
    'Olympic economics',
    'Gender parity',
    'Fandom psychology',
    'Extreme sports',
    'Sports business',
    'Youth athletics',
    'Data analytics',
    'Doping ethics',
  ],
  News: [
    'Citizen journalism',
    'Whistleblower influence',
    'Fake news',
    'Print media survival',
    'Social media news',
    'Cybersecurity news',
    'Democratic media',
    'News deserts',
    'News economics',
    'Broadcast evolution',
  ],
  Investment: [
    'Robo-advising',
    'Geopolitical impacts',
    'Index funds',
    'Real estate trends',
    'Startup investing',
    'Social trading',
    'Tax strategies',
    'Emerging markets',
    'Financial literacy',
    'Pension futures',
  ],
  Facts: [
    'Animal oddities',
    'Everyday science',
    'Historical obscurities',
    'Science myths',
    'Human body facts',
    'Oceanic discoveries',
    'Space exploration',
    'Ancient tech',
    'World laws',
    'Bizarre news',
  ],
};
const HomeController: FC<Props> = () => {
  const navigation = useNavigation<ConversationNavigationProp>();
  const [contentTypes, setContenetTypes] = useState(data);
  const [selectedTopic, setSelectedTopic] = useState('Fun');
  const [selectedTitle, setSelectedTitle] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 24,
            }}>
            Media Management
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              color: '#D0CFD1',
              fontSize: 14,
              fontWeight: '400',
              lineHeight: 21,
            }}>
            Draft campaign
          </Text>
        </View>
      ),
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <Image
            source={require('../../../assets/images/messages.png')}
            width={30}
            height={30}
          />
        </View>
      ),
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <Image
            source={require('../../../assets/images/profile.png')}
            width={30}
            height={30}
          />
        </View>
      ),
      headerStyle: {
        elevation: 0,
        height: 100,
        shadowOpacity: 0,
        shadowColor: '#00000000',
        backgroundColor: '#12111A',
        marginHorizontal: 20,
      },
    });
  }, [navigation]);

  const isSelectedBox = (data: any) => {
    const updatedButtons = contentTypes.map(button =>
      button.id === data?.id
        ? {...button, isSelected: true}
        : {...button, isSelected: false},
    );
    setContenetTypes(updatedButtons);
  };

  const handleTopicChange = (value:string) => {
    setSelectedTopic(value);
    setSelectedTitle(''); 
  };

  return (
    <HomeView
      data={contentTypes}
      isSelectedBox={isSelectedBox}
      handleTopicChange={handleTopicChange}
      selectedTitle={selectedTitle}
      setSelectedTitle={setSelectedTitle}
      topics={topics}
      selectedTopic={selectedTopic}
    />
  );
};

export default HomeController;
