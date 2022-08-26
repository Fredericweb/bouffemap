import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from '../../../components/Header/Header';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FwButton from '../../../components/FwButton/FwButton';
import styles from './style';


const FiltrageStart = ({ navigation }) => {
    const title = 'Presonnaliser les'
    const titleBr = 'paramètre de votre compte'
    const nextScreen = () => {
        navigation.navigate('Filtrage')
    }
    const backScreen = () => {
        navigation.navigate('Form')
    }
    return (
        <View style={styles.container}>
            <Header iconName='left' onPress={backScreen} />
            <View style={styles.contentTitle}>
                <Text style={styles.title} >
                    {title + '\n' + titleBr}
                </Text>
                <Text style={styles.subTitle}>
                    {"Qu'est-ce que vous obtenez en" + '\n' +
                        "personnalisant votre réglage ?"}
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <MaterialCommunityIcons name="shopping-outline" size={24} color="#8F5428" style={styles.icon} />
                    <Text style={styles.cardText}>

                        {
                            'Lorem ipsum dolor sit, amet consectetur' + '\n' +
                            'adipisicing elit. Voluptates, excepturi'
                        }
                    </Text>
                </View>
                <View style={styles.card}>
                    <AntDesign name="hearto" size={24} color="#8F5428" style={styles.icon} />
                    <Text style={styles.cardText}>

                        {
                            'Lorem ipsum dolor sit, amet consectetur' + '\n' +
                            'adipisicing elit. Voluptates, excepturi'
                        }
                    </Text>
                </View>
                <View style={styles.card}>
                    <Ionicons name="time-outline" size={24} color="#8F5428" style={styles.icon} />
                    <Text style={styles.cardText}>

                        {
                            'Lorem ipsum dolor sit, amet consectetur' + '\n' +
                            'adipisicing elit. Voluptates, excepturi'
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.btn}>
                <FwButton content='Suivant' type='primary' onPress={nextScreen} />
            </View>
            
        </View>
    );
};

export default FiltrageStart;