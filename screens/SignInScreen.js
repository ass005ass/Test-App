import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
   // AsyncStorage,
} from 'react-native';


export default class SignInScreen extends React.Component {

   state = {
            userLogin: '',
            passTrue: 'false',
        };

    userPassword = (text) => {
        if (text === '0000') {
            this.setState({passTrue: 'true'})
        } else {
            this.setState({passTrue: 'false'})
        }
    };

    nextScreen = () => {
        if (this.state.passTrue === 'true') {
            return this.props.navigation.navigate('Main')
        } else {
            //console.log(getValue())
            alert('Error: Invalid password.')
        }
    };

    render() {

        const {container, textButton, buttonStart, textInput, containerTextInput,} = styles;

        return (

            <View style={container}>

                <Text>{this.state.userLogin}</Text>
                <View style={containerTextInput}>
                    <TextInput
                        onChangeText={login => this.setState({userLogin: login})}
                        style={textInput}
                        placeholder='Login'
                    />

                    <TextInput
                        onChangeText={pass => this.userPassword(pass)}
                        style={textInput}
                        secureTextEntry={true}
                        placeholder='Password'/>
                </View>

                <TouchableOpacity
                    style={buttonStart}
                    onPress={() => this.nextScreen()}>

                    <Text style={textButton}> Sign In </Text>
                </TouchableOpacity>

            </View>

        );
    }
}

// let setValue = async () => {
//     try {
//         await AsyncStorage.setItem('name', 'my secret value')
//     } catch(e) {
//         // save error
//     }
//     console.log('Done.')
// };
//
// let getValue = async () => {
//     let value;
//     try {
//         value = await AsyncStorage.getItem('name')
//     }catch (e) {
//     }
//     console.log(value)
// };


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

    containerTextInput: {
        width: '80%',

    },

    textInput: {
        backgroundColor: '#fff',
        height: 50,
        marginBottom: 30,
        borderRadius: 10,
        borderColor: '#4F4F4F',
        borderWidth: 1,
        paddingLeft: 10,
    },
});



