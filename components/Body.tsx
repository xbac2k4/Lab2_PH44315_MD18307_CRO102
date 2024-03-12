import { Button, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { FC, memo, useState } from 'react'
import { UserType } from './Main'

type BodyType = {
    onUpdateInfo : (user : UserType) => void,
    onClickChangeBgFooter : () => void
}

const Body: FC<BodyType> = memo(props => {
    const {onUpdateInfo, onClickChangeBgFooter} = props;
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');
    const handleChangeInfo =  () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfo({name, avatar: linkImage})
        } else {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
        }
    }
  return (
    <View style={styles.container}>
        <TextInput onChangeText={(txt) => setName(txt)} style={styles.textinput} placeholder='Nhập tên mới'/>
        <TextInput onChangeText={(txt) => setLinkImage(txt)} style={styles.textinput} placeholder='Dán địa chỉ avatar mới'/>
        <Button title='Cập nhật thông tin' onPress={handleChangeInfo}/>
        <Button title='Đổi màu Footer' onPress={onClickChangeBgFooter}/>
    </View>
  )
})

export default Body

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:20,
        gap:10
    },
    textinput : {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
    }
})