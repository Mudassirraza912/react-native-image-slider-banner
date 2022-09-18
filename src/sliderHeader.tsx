import React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export const SliderHeader = ({
    leftComponent = null,
    centerComponent = null,
    rightComponent = null,
    headerStyle = {}
}: {
    leftComponent?: React.ReactNode | React.ReactNode[]
    centerComponent: React.ReactNode | React.ReactNode[]
    rightComponent: React.ReactNode | React.ReactNode[]
    headerStyle: ViewStyle
}) => {

 
    return (
        <View style={[styles.container, headerStyle]}>
            <>
                {leftComponent ? leftComponent : <View />}
                {centerComponent ? centerComponent : <View />}
                {rightComponent ? rightComponent : <View />}
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // position: 'absolute',
        // top: 0,
        width: '100%'
    }
})