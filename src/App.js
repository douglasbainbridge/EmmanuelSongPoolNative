import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import AsyncStorage from '@react-native-community/async-storage';
import Router from './Router'

//Redux
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  componentDidMount() {
    //1. see if there is already data in async storage, if so use that immediately

    //2. Check to see if we can query contentful, if we can the refresh the data

    AsyncStorage.getItem('songs')
      .then(value => {
        if (value !== null) {
          store.dispatch({ type: 'GET_SONGS', payload: JSON.parse(value) })
        }
      })
      .catch(err => {
        console.log(err)
        store.dispatch({ type: 'GET_ERROR', payload: err })
      })
    //also do this - async
    contentful()
      .then(content => {
        const validatedContent = processContentful(content)
        if (validatedContent.length === 0 && this.state.songs.length === 0) {
          store.dispatch({ type: 'GET_ERROR', payload: 'There was a problem loading, please try refreshing the page' })
        } else {
          //save data
          AsyncStorage.setItem('songs', JSON.stringify(validatedContent))
            .then(() => {
              store.dispatch({ type: 'GET_SONGS', payload: validatedContent })
            })
        }
      })
      .catch(err => {
        console.log(err)
        store.dispatch({ type: 'GET_ERROR', payload: 'There was an error' })
      })
  }

  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        {store.getState().loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
            <Router />
          )}

      </Provider>
    )
    // if (this.state.error) {
    //   return (
    //     <View style={styles.loading}>
    //       <Text>{this.state.error}</Text>
    //     </View>
    //   )
    // }
    // if (this.state.loading) {
    //   return (
    //     <View style={styles.loading}>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   )
    // }
    // return ;
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  header: {
    height: 30,
    justifyContent: 'flex-end',
    backgroundColor: 'black'
  },
  body: {
    flexGrow: 1,
    backgroundColor: 'black',
  }
});
