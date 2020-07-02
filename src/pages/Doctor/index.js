// @flow

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

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
  DummyDokter1,
  DummyDokter2,
  DummyDokter3,
  ILUserPhotoNull
} from '../../assets';
import {ROUTE_NAME} from '../../router';
import {getData} from '../../utils/localStorage';
import {Firebase} from '../../config';
import {showError} from '../../utils/showMessage';
import {set, log} from 'react-native-reanimated';

type Props = {
  navigation: NavigationProp
};

const Doctor = ({navigation}: Props) => {
  const handleChooseDoctor = (item) => {
    navigation.navigate(ROUTE_NAME.CHOOSE_DOCTOR, item);
  };
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILUserPhotoNull
  });
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    });
    getNews();
    getCategoryDoctor();
    getTopRatedDoctors();
  }, [navigation]);

  const getTopRatedDoctors = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.database()
      .ref('doctors')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          dispatch({type: 'SET_LOADING', value: false});
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key]
            });
          });
          setDoctors(data);
        }
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };

  const getNews = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          dispatch({type: 'SET_LOADING', value: false}); 
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setNews(filterData);
        }
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };

  const getCategoryDoctor = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.database()
      .ref('category_doc/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          dispatch({type: 'SET_LOADING', value: false});
          const data = res.val();
          const filterData = data.filter((el) => el !== null);

          setCategoryDoctor(filterData);
        }
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };

  const getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILUserPhotoNull;
      setProfile(res);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondary}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile
              onPress={() => navigation.navigate(ROUTE_NAME.USER_PROFILE)}
              profile={profile.photo}
              name={profile.fullName}
              desc={profile.profession}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <View style={styles.wrapperCategory}>
              <FlatList
                contentContainerStyle={styles.contentContainerCategory}
                showsHorizontalScrollIndicator={false}
                data={categoryDoctor}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                  return (
                    <DoctorCategory
                      category={item.category}
                      onPress={() => handleChooseDoctor(item)}
                    />
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {doctors.map((item) => {
              return (
                <RatedDoctor
                  key={item.id}
                  name={item.data.fullName}
                  title={item.data.category}
                  images={{uri: item.data.photo}}
                  onPress={() => {
                    navigation.navigate(ROUTE_NAME.DOCTOR_PROFILE, item);
                  }}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                image={{uri: item.image}}
                date={item.date}
              />
            );
          })}
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
