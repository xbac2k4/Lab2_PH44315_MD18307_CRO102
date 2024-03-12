import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC, memo } from 'react'

type FooterType = {
    timeUpdate : string,
    backgroundColor : string,
}

const Footer: FC<FooterType> = memo(props => {
    const {timeUpdate, backgroundColor} = props;
  return (
    <View style={containerStyle({
        height: 80,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor : backgroundColor,
      })}>
      <Text style={styles.text}>Thời gian cập nhật thông tin: {timeUpdate}</Text>
    </View>
  )
});

const containerStyle = (props: ViewStyle) => ({
    ...props,
});

export default Footer

const styles = StyleSheet.create({
    text : {
        fontSize: 18, 
        textAlign:'center',
        fontWeight: 'bold',
    }
})