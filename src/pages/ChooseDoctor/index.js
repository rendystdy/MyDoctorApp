// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, ListItems} from '../../components';
import {
  DummyDokter4,
  DummyDokter5,
  DummyDokter6,
  DummyDokter7,
  DummyDokter8,
} from '../../assets';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';

type Props = {
  navigation: NavigationProp,
};

const ChooseDoctor = ({navigation}: Props) => {
  const handleChooseDoctor = () => {
    navigation.navigate(ROUTE_NAME.CHAT);
  };
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Header type="dark" title="Pilih Dokter Anak" onPress={goBack} />
      <ListItems
        images={DummyDokter4}
        desc="Wanita"
        name="Alexander Jannie"
        type="next"
        onPress={handleChooseDoctor}
      />
      <ListItems
        images={DummyDokter5}
        desc="Wanita"
        name="John McParker Steve"
        type="next"
        onPress={handleChooseDoctor}
      />
      <ListItems
        images={DummyDokter6}
        desc="Wanita"
        name="Nairobi Putri Hayza"
        type="next"
        onPress={handleChooseDoctor}
      />
      <ListItems
        images={DummyDokter7}
        desc="Wanita"
        name="James Rivillia"
        type="next"
        onPress={handleChooseDoctor}
      />
      <ListItems
        images={DummyDokter8}
        desc="Wanita"
        name="Liu Yue Tian Park"
        type="next"
        onPress={handleChooseDoctor}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
