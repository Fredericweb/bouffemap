import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import Card from './Card';
import styles from './style';


const FiltrageCard = (props) => {
    const { title, titleBr, subtitle, subtitleBr, dataCard } = props.data
    const numCol = 2
    const count = dataCard.length

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title + '\n' + titleBr}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle + '\n' + subtitleBr}
                </Text>
            </View>
            <View style={styles.cardContain}>
                <FlatList
                    data={dataCard}
                    renderItem={({ item }) => <Card data={item} count={count} />}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numCol}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

export default FiltrageCard;
