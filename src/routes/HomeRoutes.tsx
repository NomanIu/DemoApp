import React, { FC } from 'react'
import { HomeStack } from './HomeStack'
import HomeController from '../ui/screens/HomeController'


type Props = {
    initialRouteName: 'Home'
}

export const HomeRoutes: FC<Props> = ({ initialRouteName }) => {
    return (
        <HomeStack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                headerTitleAlign: 'center',
                
               
            }}
        >
             <HomeStack.Screen
                name="Home"
               // options={{headerMode:'none'}}
                component={HomeController}
            />
           
            
        </HomeStack.Navigator>
    )
}
