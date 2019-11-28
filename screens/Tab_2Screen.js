import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import *as ImagePicker from "expo-image-picker";


export default class Tab_2Screen extends React.Component {

    static navigationOptions = {
        header: null
    };

    state ={
        image: require('../assets/no_thumb.png')
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result });
        }
    };


    render() {

        let { image } = this.state;
        const {container, textButton, buttonStart, imageStyle} = styles;

        return (

            <View style={container}>
                <Image
                    style={imageStyle}
                    source={image}/>

                <TouchableOpacity
                    onPress={this.pickImage}
                    style={buttonStart}>
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