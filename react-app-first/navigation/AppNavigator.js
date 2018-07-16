import {createStackNavigator} from 'react-navigation';
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PhonesListScreen from "../screens/PhonesListScreen";
import PhoneCreateScreen from "../screens/PhoneCreateScreen";

exports.RootStack = createStackNavigator(
    {
        WelcomePage: {screen: WelcomeScreen},
        Registration: {screen: RegisterScreen},
        ShowArtists: {screen: PhonesListScreen},
        AddArtist: {screen: PhoneCreateScreen}
    },
    {
        initialRouteName: 'WelcomePage'
    }
);