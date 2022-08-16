import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    btn :{
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
   
    skip: {
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
    },
    btnIcon :{
        height: 40,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
    },
    icon : {
        padding: 20
    },
    iconOutline: {
        marginLeft: 35,
        marginRight: 5
    },
    titleIcon :{
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '500',
    }
    

});

export default styles;