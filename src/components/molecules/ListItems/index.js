// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {
  DummyDokter1,
  ICChevronRight,
  ICAccountCircle,
  ICLanguage,
  ICRatedOutline,
  ICHelp
} from '../../../assets';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontValue as rf,
  responsiveBorderRadius as rbr
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  name?: string,
  desc?: string,
  images?: Object,
  type: string,
  onPress: Function,
  icon?: string
};

const ListItems = ({name, desc, images, type, onPress, icon}: Props) => {
  const listIcon = {
    EDIT_PROFILE: 'edit-profile',
    LANGUAGE: 'language',
    RATED: 'rated',
    HELP: 'help'
  };
  const Icon = () => {
    switch (icon) {
      case listIcon.EDIT_PROFILE:
        return <ICAccountCircle style={styles.icon} />;
      case listIcon.LANGUAGE:
        return <ICLanguage style={styles.icon} />;
      case listIcon.RATED:
        return <ICRatedOutline style={styles.icon} />;
      case listIcon.HELP:
        return <ICHelp style={styles.icon} />;
      default:
        return <ICAccountCircle style={styles.icon} />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? <Icon /> : <Image source={images} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <ICChevronRight />}
    </TouchableOpacity>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.VERY_LIGHT_GRAY,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flex: 1
  },
  image: {
    width: rw(46),
    height: rh(46),
    borderRadius: rbr(46 / 2),
    marginRight: rw(12)
  },
  name: {
    fontSize: rf(16),
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.regular,
    lineHeight: 22
  },
  chat: {
    fontSize: rf(12),
    color: Colors.DARK_GRAYISH_BLUE,
    fontFamily: FontsType.light,
    lineHeight: 16,
    textTransform: 'capitalize'
  },
  icon: {
    marginRight: rw(16)
  }
});
