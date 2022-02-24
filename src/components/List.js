import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import styles from '../styles';

const stylesModule = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    // fontSize: 10,
  },
  itemContent: {
    flex: 1,
    // fontSize: 10,
    // fontFamily: 'Lato',
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={stylesModule.item}>
    <Text style={stylesModule.bulletPoint}>•</Text>
    <Text style={stylesModule.itemContent}>{children}</Text>
  </View>
);

export default List;
