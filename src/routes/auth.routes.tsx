import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { SignUp } from '@screens/SignUp';
import { SignIn } from '@screens/Signin';

const {Navigator, Screen} =  createNativeStackNavigator();

export function AuthRoutes(){
    return (
        <Navigator>
            <Screen name='signIn' component={SignIn}/>
            <Screen name='signUp' component={SignUp}/>
        </Navigator>
    )
}