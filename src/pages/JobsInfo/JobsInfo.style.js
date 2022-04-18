import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
export default StyleSheet.create({
  htmlStyles: {
    a: {
      fontWeight: '300',
      fontSize: 15,
    },
    p: {
      fontSize: 15,
    },
    strong: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    li: {
      fontSize: 15,
    },
    br: {
      fontSize: 15,
    },
  },
  submitAndFavButtonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
  },
  submitAndFavButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonTitle: {fontWeight: 'bold', color: 'white'},
});
