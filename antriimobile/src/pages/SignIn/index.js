import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const SignIn = () => {
    return (
        <View style={styles.page}>
            <LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
  locations={[0,0.5,0.6]}
  colors={['#FF7E07', '#FF7907', '#FD6906']}
  style={styles.linearGradient}>
</LinearGradient>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
})
