import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput } from 'react-native';
// import CheckBox from 'expo-checkbox';
// import { CheckBox } from "@rneui/themed";
import styles from './style';
import FwButton from '../../components/FwButton/FwButton';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";


const FormIns = ({ navigation }) => {
    const title = 'Rejoignez nous &';
    const titleBr = 'profiter des offres';
    const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            mail: '',
            password: ''
        }
    });

    const [pass, setPass] = useState(true)
    const [icon, setIcon] = useState('eye')
    const [isSelected, setSelection] = useState(false);


    const onSubmit = data => {
        console.log(data);
    };

    const hide = () => {
        icon === 'eye' ? (setPass(false), setIcon('eye-closed')) : (setPass(true), setIcon('eye'))
    }

    const nextScreen = () => {
        navigation.navigate('insCnx')
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Pressable style={styles.backBtn} onPress={nextScreen}>
                    <AntDesign
                        style={styles.backIcon}
                        name="arrowleft"
                        size={24}
                        color="#7C7C7C"
                    />

                </Pressable>

                <Image
                    source={require('../../assets/img/logo.png')}
                    style={styles.logo}
                />

            </View>

            <View style={styles.contentTitle}>
                <Text style={styles.title} >
                    {title + '\n' + titleBr}
                </Text>
                <Text style={styles.subTitle}>
                    {"Lorem ipsum dolor sit amet consectetur" + '\n' +
                        ", adipisicing elit. Blanditiis, eligendi architecto?"}
                </Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Nom & prénom</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder={'Nom & prénom'}
                        />
                    )}
                    name="name"
                    rules={{ required: true }}
                />
                <Text style={styles.label}>Adresse E-mail</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder={'E-mail'}
                        />

                    )}
                    name="mail"
                    rules={{ required: true }}
                />
                <Text style={styles.label}>Password</Text>
                <View style={styles.password}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.inputPass}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder={'password'}
                                secureTextEntry={pass}
                            />
                        )}
                        name="password"
                        type={pass}
                        rules={{ required: true }}
                    />
                    <Octicons name={icon} size={24} color="black" onPress={hide} />
                </View>
                {/* <View style={styles.checkContent}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>
                        {'Lorem ipsum dolor sit amet consectetur' + '\n' +
                            'adipisicing elit. Nihil, aliquid magni?'}
                    </Text>
                </View> */}
                <View style={styles.btn}>

                </View>


            </View>
            <FwButton style={styles.btn} content={'Suivant'} type='primary' onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default FormIns;