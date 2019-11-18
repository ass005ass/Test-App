import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Tab_4Screen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {


        const {container, textButton, buttonStart,} = styles;

        return (

            <View style={container}>

                <TouchableOpacity style={buttonStart}>
                    <Text style={textButton}> Show </Text>
                </TouchableOpacity>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#C4C4C4',
    },

    buttonStart: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D9CDB',
        height: 50,
        width: '80%',
        margin: 63,
        borderRadius: 10,
    },

    textButton: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#000',
    },

});