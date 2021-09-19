import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export const SliderHeader = ({
    leftComponent = null,
    centerComponent = null,
    rightComponent = null,
    headerStyle={}
}) => {


    return(
        <View style={[styles.container, headerStyle]}>
            {leftComponent ? leftComponent : <View />}
            {centerComponent ? centerComponent : <View />}
            {rightComponent ? rightComponent : <View />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})