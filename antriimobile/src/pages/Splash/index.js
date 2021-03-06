import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ICAntrii } from '../../assets/icons'

const Splash = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('SignIn')
    }, 3000)
    return (
        <View style={styles.page}>
           <ICAntrii />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FF7E07',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFFFFF'
    }
})
