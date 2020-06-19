import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ListDoctorItem} from '../../components';
import {
  DummyDokter4,
  DummyDokter5,
  DummyDokter6,
  DummyDokter7,
  DummyDokter8,
} from '../../assets';
import {Colors} from '../../utils/Colors';

const ChooseDoctor = () => {
  return (
    <View style={styles.container}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListDoctorItem
        images={DummyDokter4}
        desc="Wanita"
        name="Alexander Jannie"
        type="next"
      />
      <ListDoctorItem
        images={DummyDokter5}
        desc="Wanita"
        name="John McParker Steve"
        type="next"
      />
      <ListDoctorItem
        images={DummyDokter6}
        desc="Wanita"
        name="Nairobi Putri Hayza"
        type="next"
      />
      <ListDoctorItem
        images={DummyDokter7}
        desc="Wanita"
        name="James Rivillia"
        type="next"
      />
      <ListDoctorItem
        images={DummyDokter8}
        desc="Wanita"
        name="Liu Yue Tian Park"
        type="next"
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
