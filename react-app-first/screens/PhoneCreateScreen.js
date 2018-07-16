import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class PhoneCreateScreen extends React.Component{

    static navigationOptions = {
        title: 'Добавление телефона',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: (<View />)
    };

    constructor(props){

        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            nickname: '',
            token: apiToken,
            age: '',
            model: ''
        }

    }

    render(){

        return(

            <View style={stylesVariable.container}>

                <Button

                    title= 'Вернуться к телефонам'
                    onPress = {() => this.props.navigation.push('ShowPhones', {token: this.state.token})}
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}

                />

                <FormInput

                    placeholder='Название телефона'
                    onChangeText = {(value) => this.setState({nickname: value})}
                    value = {this.state.nickname}

                />

                <FormInput

                    placeholder='Возраст телефона'
                    onChangeText = {(value) => this.setState({age: value})}
                    value = {this.state.age}

                />

                <FormInput

                    placeholder='Модель телефона'
                    onChangeText = {(value) => this.setState({model: value})}
                    value = {this.state.model}

                />

                <Button

                    title='Добавить'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress = {this.handleArtistCreate.bind(this)}

                />

            </View>

        );

    }

    handleArtistCreate = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.createPhone(this.state.nickname, this.state.age, this.state.model)
           .then(responseJSON => {

                if(responseJSON.status === "success"){
                    this.props.navigation.push('ShowPhones', {token: this.state.token});
                }else{
                    this.props.navigation.push('AddPhone', {token: this.state.token});
                }

           })
           .catch(error => Alert.alert("Error", error.message));

    }

}

const stylesVariable = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button_style: {
        width: 200,
        margin: 15
    }

});