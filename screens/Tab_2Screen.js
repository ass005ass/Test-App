import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';

export default class Tab_2Screen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {

        const {container, textButton, buttonStart, imageStyle} = styles;

        return (

            <View style={container}>
                <Image
                    style={imageStyle}
                    source={require('../assets/no_thumb.png')}/>

                <TouchableOpacity style={buttonStart}>
                    <Text style={textButton}> Upload Image </Text>
                </TouchableOpacity>

            </View>

        );

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
    },

    buttonStart: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 50,
        width: '80%',
        borderRadius: 10,
        opacity: 0.8,
    },

    textButton: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#fff',
    },

    imageStyle: {
        width: '60%',
        height: '50%',
        marginBottom: 50,
        borderRadius: 20,

    },

});