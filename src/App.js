import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import PostPreach from './views/PostPreach'
import AsyncStorage from '@react-native-community/async-storage';
import Router from './Router'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      songs: [],
      filteredSongs: [],
      error: '',
      filterFocus: false,
      filterNew: false,
    }
  }


  componentDidMount() {
    //1. see if there is already data in async storage, if so use that immediately

    //2. Check to see if we can query contentful, if we can the refresh the data

    AsyncStorage.getItem('songs')
      .then(value => {
        if (value !== null) {
          console.log("loaded from storage")
          console.log(JSON.parse(value))
          this.setState({
            songs: JSON.parse(value),
            filteredSongs: JSON.parse(value),
            loading: false
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err,
          loading: false
        })
      })
    //also do this - async
    contentful()
      .then(content => {
        const validatedContent = processContentful(content)
        if (validatedContent.length === 0 && this.state.songs.length === 0) {
          this.setState({
            error: 'There was a problem loading, please try refreshing the page',
            loading: false
          })
        } else {
          //save data
          AsyncStorage.setItem('songs', JSON.stringify(validatedContent))
            .then(() => {
              this.setState({
                songs: validatedContent,
                filteredSongs: validatedContent,
                loading: false
              })
            })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false, error: 'There was an error' })
      })
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.loading}>
          <Text>{this.state.error}</Text>
        </View>
      )
    }
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return <Router songs={this.state.filteredSongs} />;
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
