import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {List, ListItem, Button, Text} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class ArtistsListScreen extends React.Component {

    static navigationOptions = {
        title: 'Список телефонов',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: (<View />)
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            token: apiToken,
            phonesList: [{nickname: "example", age: 18, model: "example"}]
        };
    }

    render() {

        return (

            <View style={stylesVariable.container}>

                <Button
                    title = 'Показать телефоны'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress={this.handleList.bind(this)}

                >
                    <Text>Show Phones</Text>
                </Button>

                <Button
                    title = 'Добавить'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress={
                        () => this.props.navigation.push('AddPhone', {

                            token: this.state.token

                        }
                     )
                    }

                >
                    <Text>Go to creation page</Text>
                </Button>


                <List containerStyle={stylesVariable.list_style}>

                    {

                        this.state.phonesList.map((item, i) => (

                            <ListItem
                                roundAvatar
                                key = {i}
                                title = {item.nickname}
                                subtitle = {`${item.age} лет`}
                                subtitle = {item.model}
                                avatar = {{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                            />

                        ))

                    }

                </List>

            </View>

        );


    }

    handleList = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.getAllPhones()
            .then(responseJSON => {

                const data = responseJSON.data.phones.map(item => ({
                    nickname: item.nickname,
                    age: item.age,
                    model: item.model
                }));

                this.setState({phonesList: data})
            })
            .catch(error => {
                Alert.alert("Error", error.message);
                throw new Error(error);
            });

    };

}

const stylesVariable = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center'
    },

    button_style: {
        width: 200,
        margin: 15
    },

    list_style: {
        marginBottom: 20,
        width: '100%'
    }

});