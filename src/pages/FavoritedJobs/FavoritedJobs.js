import React, {useState} from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styleJobs from '../Jobs/Jobs.style';
import styleFav from './FavoritedJobs.style';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
function FavoritedJobs() {
  const favJobsList = useSelector(s => s.favoritedJobs);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = React.useState(false);

  function deleteFav(item, index) {
    favJobsList.splice(index, 1);
    dispatch({
      type: 'DELETE_FAVORITE_JOB',
      payload: {deletingFav: favJobsList},
    });
    setRefreshing(true);
    wait(1).then(() => setRefreshing(false));
  }

  function renderFavList({item, index}) {
    return (
      <View style={styleJobs.card}>
        <Text style={styleJobs.jobName}>{item.name}</Text>
        <Text style={styleJobs.type}>{item.type}</Text>
        <Text style={styleJobs.locations}>{item.locations[0].name}</Text>
        <Text style={styleJobs.levels}>{item.levels[0].name}</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styleFav.removeButton}
            onPress={() => deleteFav(item, index)}>
            <Text style={styleFav.removeButtonTitle}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={favJobsList}
      renderItem={renderFavList}
      refreshControl={<RefreshControl refreshing={refreshing} />}
    />
  );
}
export default FavoritedJobs;
