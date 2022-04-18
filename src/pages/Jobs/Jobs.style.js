import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
export default StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  jobName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 6,
  },
  type: {
    flex: 1,
    fontSize: 14,
    marginLeft: 6,
  },
  locations: {
    flex: 1,
    fontSize: 14,
    backgroundColor: 'red',
    marginLeft: 4,
    marginTop: 2,
    fontWeight: 'bold',
    color: 'white',
    padding: 3,
    borderRadius: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  levels: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 5,
    color: 'red',
  },
});
