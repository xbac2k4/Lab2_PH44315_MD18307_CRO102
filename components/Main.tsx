import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export type UserType = {
    name : string,
    avatar : string,
}

const Main = () => {
    const [user, setUser] = useState<UserType>({
        name : 'Xuân Bắc',
        avatar : 'https://cdn.onlinewebfonts.com/svg/img_173956.png'
    });
    //
    const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');
    //
    const colors = ['white', 'gray', 'orange', 'yellow', 'red', 'blue'];
    const [footerColor, setFooterColor] = useState(colors[0]);
    //
    const handleUpdateInfo = useCallback((_user: UserType) => {
        setUser(_user);
    }, [])
    //
    const handleRandomColor = useCallback(() => {
        const numberRandom = Math.floor(Math.random() * colors.length)
        setFooterColor(colors[numberRandom])
    }, [])
    //
    useEffect(() => {
        const currentDate = new Date();
        const dateTime = currentDate.getDate()
        + '/' 
        + (currentDate.getMonth())
        + '/'
        + currentDate.getFullYear()
        + ' '
        + currentDate.getHours()
        + ':'
        + currentDate.getMinutes()
        + ':'
        + currentDate.getSeconds()
        setLastTimeUpdate(dateTime)
    } ,[user])
    
  return (
    <View style={styles.cotainer}>
      <Header user={user}/>
      <Body onUpdateInfo={handleUpdateInfo} onClickChangeBgFooter={handleRandomColor}/>
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    cotainer : {
        flex: 1,
        justifyContent: 'space-between'
    }
})