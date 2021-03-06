import React from 'react';
import {Text, View, StyleSheet, AsyncStorage,} from 'react-native';
import {Picker} from "native-base";


export default class Tab_1Screen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        userName: '',
        selected: 'kay0',
    };

    onValueChange(value) {
        this.setState({
            selected: value
        })
    };

    render() {

        AsyncStorage.getItem('login').then(value => this.setState({userName: value}));

        const {container, styleText, pickerStyle,} = styles;

        return (

            <View style={container}>

                <Text style={styleText}> Привет, {this.state.userName} ! </Text>

                <View style={pickerStyle}>

                    <Picker
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}>

                        <Picker.Item label="Drop down list" value="kay0"/>
                        <Picker.Item label="state_1" value="kay01"/>
                        <Picker.Item label="state_2" value="kay02"/>

                    </Picker>

                </View>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
    },

    styleText: {
        fontFamily: 'Roboto',
        marginTop: 80,
        fontSize: 20,
        color: '#fff',
    },
    pickerStyle: {
        width: '80%',
        backgroundColor: '#fff',
        marginTop: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E5E5E5',
    },

});


