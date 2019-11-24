import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class Tab_4Screen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        buttonWord: 'Show',
    };

    buttonFunc = () => {
        if (this.state.buttonWord === 'Show') {
            this.setState({buttonWord: 'Hide'})
        } else {
            this.setState({buttonWord: 'Show'})
        }
    };

    styleButton = () => {
        if (this.state.buttonWord === 'Show') {
            return styles.buttonShow
        } else {
            return styles.buttonHide
        }
    };

    containerLinearGradient = () => {
        if (this.state.buttonWord === 'Show') {
            return ['#C4C4C4', '#C4C4C4']
        } else {
            return ['#FF0000', '#27AE60']
        }
    };


    render() {


        const {container, textButton, linearGradientContainer,} = styles;

        return (

            <View style={container}>
                <LinearGradient
                    style={linearGradientContainer}
                    colors={this.containerLinearGradient()}>
                </LinearGradient>

                <TouchableOpacity
                    onPress={() => this.buttonFunc()}
                    style={this.styleButton()}>
                    <Text style={textButton}> {this.state.buttonWord} </Text>
                </TouchableOpacity>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#C4C4C4',
    },

    buttonShow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D9CDB',
        height: 50,
        width: '80%',
        borderRadius: 10,
        opacity: 0.7,
    },

    buttonHide: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AE60',
        height: 50,
        width: '80%',
        borderRadius: 10,
        opacity: 0.7,
    },

    textButton: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#000',
    },

    linearGradientContainer: {
        width: '50%',
        height: '60%',
        opacity: 0.7,
    },

});