import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    scrollContainer: {
        paddingTop: 50,
        width: '100%',
    },

    nextButton: {
        bottom: 50,
        marginTop: 70,
        alignSelf: 'center',
        alignItems: 'center',
        width: '50%',
        height: '8%',
        backgroundColor: '#F4AA8A',
        borderRadius: 10,

    },

    nextText: {
        paddingTop: 10,
        fontSize: 22,
        fontFamily: 'ABeeZee',
    },
});
