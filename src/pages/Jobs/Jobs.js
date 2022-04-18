import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import style from './Jobs.style';
function Jobs({navigation, route}) {
  const globalJobsList = useSelector(s => s.jobs);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = () => {
    axios
      .get('https://www.themuse.com/api/public/jobs?page=1')
      .then(response => {
        dispatch({
          type: 'VIEW_JOBS',
          payload: {jobsObject: response.data.results},
        });
        setLoading(false);
      });
  };

  function renderJobs({item, index}) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('JobsInfo', {item, title: item.name, index});
        }}>
        <View style={style.card}>
          <Text style={style.jobName}>{item.name}</Text>
          <Text style={style.type}>{item.type}</Text>
          <Text style={style.locations}>{item.locations[0].name}</Text>
          <Text style={style.levels}>{item.levels[0].name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      {loading ? (
        <View>
          <ActivityIndicator size={'large'} color={'red'} animating={loading} />
        </View>
      ) : (
        <FlatList data={globalJobsList} renderItem={renderJobs} />
      )}
    </SafeAreaView>
  );
}
export default Jobs;
