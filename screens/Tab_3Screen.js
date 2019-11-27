import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Tab_3Screen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            time: 'Set Time',
            buttonClick: 'false',
        }
    }

    startTimer = () => {
        let nawTime = new Date();
        let hours = nawTime.getHours();
        let minutes = nawTime.getMinutes();
        let second = nawTime.getSeconds();
        return this.setState({time: `${hours}:${minutes}:${second}`});
    };

    timer = () => {
        let timeNow = null;
        if (this.state.time === 'Set Time') {
            timeNow = setInterval(this.startTimer, 1000)
        }else  {
            clearInterval(timeNow);
            this.setState({time: 'Set Time'});
        }
    };


    render() {

        const {container, textButton, buttonStart,} = styles;

        return (

            <View style={container}>

                <TouchableOpacity
                    onPress={this.timer}
                    style={buttonStart}>
                    <Text style={textButton}> {this.state.time} </Text>
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
        marginTop: '15%',
        borderRadius: 10,
        opacity: 0.8,
    },

    textButton: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#fff',
    },

});