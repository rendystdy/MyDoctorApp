// @flow

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
  Gap
} from '../../components';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontValue as rf
} from '../../utils/Responsive';
import {FontsType} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {
  JSONCategoryDoctor,
  DummyDokter1,
  DummyDokter2,
  DummyDokter3
} from '../../assets';
import {ROUTE_NAME} from '../../router';

type Props = {
  navigation: NavigationProp
};

const Doctor = ({navigation}: Props) => {
  const handleChooseDoctor = () => {
    navigation.navigate(ROUTE_NAME.CHOOSE_DOCTOR);
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondary}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile
              onPress={() => navigation.navigate(ROUTE_NAME.USER_PROFILE)}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <View style={styles.wrapperCategory}>
              <FlatList
                contentContainerStyle={styles.contentContainerCategory}
                showsHorizontalScrollIndicator={false}
                data={JSONCategoryDoctor.data}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <DoctorCategory
                    category={item.category}
                    onPress={handleChooseDoctor}
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              name="Alexa Rachel"
              title="Pediatrician"
              images={DummyDokter1}
              onPress={() => {
                navigation.navigate(ROUTE_NAME.DOCTOR_PROFILE);
              }}
            />
            <RatedDoctor
              name="Sunny Frank"
              title="Dentist"
              images={DummyDokter2}
              onPress={() => {}}
            />
            <RatedDoctor
              name="Poe Minn"
              title="Podiatrist"
              images={DummyDokter3}
              onPress={() => {}}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.VERY_DARK_BLUE
  },
  secondary: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  welcome: {
    fontSize: rf(20),
    fontFamily: FontsType.semiBold,
    color: Colors.VERY_DARK_BLUE,
    lineHeight: 24,
    marginTop: rh(30),
    maxWidth: rw(209),
    marginBottom: rh(16)
  },
  wrapperCategory: {
    marginBottom: rh(30),
    marginHorizontal: rw(-16)
  },
  contentContainerCategory: {paddingLeft: rw(16), paddingRight: rw(6)},
  sectionLabel: {
    fontSize: rf(16),
    fontFamily: FontsType.semiBold,
    color: Colors.VERY_DARK_BLUE,
    lineHeight: 19,
    marginBottom: rh(16)
  },
  wrapperSection: {
    paddingHorizontal: rw(16)
  }
});
