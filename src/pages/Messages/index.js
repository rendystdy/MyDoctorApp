// @flow

import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {ListItems} from '../../components';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontValue as rf,
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {FontsType} from '../../utils/Fonts';
import {DummyDokter1, DummyDokter2, DummyDokter3} from '../../assets';

type Props = {};

const Messages = ({}: Props) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
      images: DummyDokter1,
    },
    {
      id: 2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
      images: DummyDokter2,
    },
    {
      id: 3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
      images: DummyDokter3,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Messages</Text>
          {doctors.map((item) => {
            return (
              <ListItems
                key={item.id}
                name={item.name}
                desc={item.desc}
                images={item.images}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.VERY_DARK_BLUE,
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  // wrapperSection: {
  //   marginHorizontal: rw(16),
  //   marginVertical: rh(30),
  // },
  title: {
    fontSize: rf(20),
    lineHeight: 24,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.semiBold,
    marginLeft: rw(16),
    marginTop: rh(30),
  },
});
