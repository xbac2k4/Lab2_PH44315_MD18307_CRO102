import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { UserType } from './main';

type HeaderType = {
    user: UserType;
}

const Header: FC<HeaderType> = memo(props => {
    console.log('re-render header');
    const { user } = props;

    return (
        <View style={styles.container}>
            <Image resizeMode='center' style={styles.avatar} source={{ uri: user.avatar }} />
            <View>
                <Text>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    )
});

export default Header

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    avatar: {
        width: 50,
        height: 50,
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})