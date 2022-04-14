import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'
import DashboardScreen from '../screens/DashboardScreen'
import Dummy from '../screens/Dummy/Dummy'
import ResidentAnalysisScreen from '../screens/ResidentAnalysisScreen'
import ForwardAuthenticated from './ForwardAuthenticated'
import LoginScreen from '../screens/LoginScreen'
import Settings from '../screens/settings'
import ConfirmLogout from '../Popups/ConfirmLogout'
import DailyObservation from '../screens/DailyObservation'
import Notification from '../screens/Notifications'
import Health from '../Popups/Health'
import Manageprofile from '../screens/Manageprofile'
import SaveConfigure from '../screens/SaveConfigure'

const ProtectedRoutes = () => {

    const [title, setTitle] = React.useState('');

    const RenderComponent = (Component) => () => {
        return <Component setTitle={setTitle} />
    }

    React.useEffect(() => {
        document.title = `${title} - Mi Care`
    }, [title])

    return (
        <>



            <BaseLayout title={title}>
                <Route exact path='/' component={DashboardScreen}/>
                <Route exact path='/dashboard' render={RenderComponent(DashboardScreen)} />
                <Route exact path='/resident-analysis' render={RenderComponent(ResidentAnalysisScreen)} />
            

                {/* dummy chart for testing */}
         
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/dailyobservations' component={DailyObservation}/>
          <Route exact path='/notifications' component={Notification}/>
          <Route exact path='/health' component={Health}/>
          
          <Route exact path='/manageprofile' component={Manageprofile}/>
          <Route exact path='/saveconfigure' component={SaveConfigure}/>
            </BaseLayout>
       {   /*  <ForwardAuthenticated /> */}
        </>
    )
}

export default ProtectedRoutes
