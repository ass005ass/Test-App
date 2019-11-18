import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Tab_3Screen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {

        const {container, textButton, buttonStart,} = styles;

        return (

            <View style={container}>

                <TouchableOpacity style={buttonStart}>
                    <Text style={textButton}> Set Time </Text>
                </TouchableOpacity>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#C4C4C4',
    },

    buttonStart: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 50,
        width: '80%',
        marginTop: 200,
        borderRadius: 10,
    },

    textButton: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#fff',
    },

});