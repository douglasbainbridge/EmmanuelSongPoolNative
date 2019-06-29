import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import PostPreach from './views/PostPreach'

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
    contentful()
      .then(content => {
        const validatedContent = processContentful(content)
        if (validatedContent.length === 0) {
          this.setState({
            error: 'There was a problem loading, please try refreshing the page',
            loading: false
          })
        } else {
          this.setState({
            songs: validatedContent,
            filteredSongs: validatedContent,
            loading: false
          })
        }
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false, error: 'There was an error' })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.body}>
          <PostPreach songs={this.state.filteredSongs} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
