import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';


export  default class StartScreen extends Component {

    render() {

        const {container, textButton, buttonStart,} = styles;

        return (

            <ImageBackground
                style={container}
                source={require('../assets/image.png')}>

                <TouchableOpacity
                    style={buttonStart}
                    onPress={() => this.props.navigation.navigate('SignIn')}>
                    <Text style={textButton}> Start </Text>
                </TouchableOpacity>

            </ImageBackground>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    buttonStart: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EB5757',
        height: 50,
        width: '80%',
        margin: 63,
        borderRadius: 10,
    },

    textButton: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#fff',
    },
});
