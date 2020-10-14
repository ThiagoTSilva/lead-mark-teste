import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import Splashscreen from './pages/Splashscreen'
import List from './pages/List'

export default createAppContainer(
    createSwitchNavigator({
        Splashscreen,
        Login,
        List
    })
)