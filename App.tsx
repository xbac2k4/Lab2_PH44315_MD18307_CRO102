import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './components/Main'

const App = () => {
  return (
      <KeyboardAvoidingView style={{
        flex:1
      }}>
        <Main />
      </KeyboardAvoidingView>
  )
}

export default App

const styles = StyleSheet.create({})