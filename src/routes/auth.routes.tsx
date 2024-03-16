import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack'

import { SignUp } from '@screens/SignUp';
import { SignIn } from '@screens/Signin';

type AuthRoutesProps = {
    signIn:undefined,
    signUp:undefined
}

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutesProps>

const {Navigator, Screen} =  createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes(){
    return (
        <Navigator>
            <Screen name='signIn' component={SignIn}/>
            <Screen name='signUp' component={SignUp}/>
        </Navigator>
    )
}