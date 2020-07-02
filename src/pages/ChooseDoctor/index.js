// @flow

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import {Header, ListItems} from '../../components';
import {
  DummyDokter4,
  DummyDokter5,
  DummyDokter6,
  DummyDokter7,
  DummyDokter8
} from '../../assets';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';
import {Firebase} from '../../config';

type Props = {
  navigation: NavigationProp,
  route: RouteProp
};

const ChooseDoctor = ({navigation, route}: Props) => {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    getDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const getDoctorByCategory = (category) => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];

          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item]
            });
          });

          setListDoctor(data);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const handleChooseDoctor = (item) => {
    navigation.navigate(ROUTE_NAME.DOCTOR_PROFILE, item);
  };

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={goBack}
      />
      {listDoctor.map((item) => {
        const {
          data: {fullName, photo, gender},
          id
        } = item;
        return (
          <ListItems
            key={id}
            images={{uri: photo}}
            desc={gender}
            name={fullName}
            type="next"
            onPress={() => handleChooseDoctor(item)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  }
});
