import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardTitle, Container } from '../styles/StyledComponents'
import AppHeader from '../components/AppHeader'

const ProfileScreen = ({navigation}) => {
  return (
    <Container>
      <AppHeader title="Profile" navigation={navigation} />
      <CardTitle>Profile Screen</CardTitle>
    </Container>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})