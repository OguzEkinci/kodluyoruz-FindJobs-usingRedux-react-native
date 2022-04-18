import React from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import styles from './JobsInfo.style';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
function JobsInfo({route}) {
  const dispatch = useDispatch();
  const favList = useSelector(s => s.favoritedJobs);

  const createTwoButtonAlert = () =>
    Alert.alert('DİKKAT', 'Bu ilan zaten favorilerinizde', [
      {text: 'Cancel'},
      {text: 'OK'},
    ]);
  function addFav() {
    if (favList[0]) {
      favList.forEach(ind => {
        if (ind.id === route.params.item.id) {
          return createTwoButtonAlert();
        } else {
          dispatch({
            type: 'ADD_FAVORITE_JOB',
            payload: {favJobsObject: route.params.item},
          });
        }
      });
    } else {
      dispatch({
        type: 'ADD_FAVORITE_JOB',
        payload: {favJobsObject: route.params.item},
      });
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 10, flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {route.params.item.name}
          </Text>
          <Text>
            <Text style={{color: 'red'}}>Locations: </Text>
            {route.params.item.locations[0].name}
          </Text>
          <Text>
            <Text style={{color: 'red'}}>Job Level: </Text>
            {route.params.item.levels[0].name}
          </Text>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Job Detail
          </Text>
          <View style={{backgroundColor: 'gray', height: 2}} />
        </View>
        <HTMLView
          value={route.params.item.contents}
          stylesheet={[styles.htmlStyles, {flex: 1}]}
          onLinkPress={url => console.log('clicked link: ', url)}
        />
        <View style={styles.submitAndFavButtonView}>
          <TouchableOpacity style={styles.submitAndFavButton}>
            <Icon name={'arrow-right'} size={35} color={'white'} />
            <Text style={styles.buttonTitle}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitAndFavButton}
            onPress={() => addFav()}>
            <Icon name={'heart'} size={35} color={'white'} />
            <Text style={styles.buttonTitle}>Favorite Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default JobsInfo;
