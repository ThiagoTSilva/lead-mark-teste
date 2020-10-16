import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Login from './pages/Login'
import Splashscreen from './pages/Splashscreen'
import List from './pages/List'
import Product from './pages/Product'
import ItensList from './components/ItensList'

const Drawer = createDrawerNavigator({
    List,
    Product
    },{
    drawerPosition:"right",
    drawerBackgroundColor: '#2c2c2c',
    statusBarAnimation:"fade"
    
    }
)

export default createAppContainer(
    createSwitchNavigator({
        Splashscreen,
        Login,
        ItensList,
        Drawer
    })
    
)