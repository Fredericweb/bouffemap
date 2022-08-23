import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './style';


const Card = (props) => {
    const { img1, img2, img3, img4, img5, img6, title, titleBr, subtitle, subtitleBr } = props.data
    return (
        <View style={styles.container}>

            <View style={styles.imgContainer}>

                <View style={styles.left}>
                    <Image
                        source={img1}
                        style={styles.imgLeftT} />

                    <Image
                        source={img2}
                        style={styles.imgLeftB} />
                </View>

                <View style={styles.center}>

                    <Image
                        source={img3}
                        style={styles.imgCenterT} />

                    <Image
                        source={img4}
                        style={styles.imgCenterB} />


                </View>

                <View style={styles.right} >
                    <Image
                        source={img5}
                        style={styles.imgRightT} />

                    <Image
                        source={img6}
                        style={styles.imgRightB} />
                </View>


            </View>

            <View style={styles.textContainer} >

                <Text style={styles.title} >
                    {title + "\n" + titleBr}
                </Text>

                <Text style={styles.subtitle} >
                    {subtitle + "\n" + subtitleBr}
                </Text>

            </View>

            <StatusBar style="auto" />
        </View>
    );
};

export default Card;
