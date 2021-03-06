import React from 'react';
import Home from '../components/home/Home';
//import Portfolio from '../components/portfolio/Portfolio';
import Project from '../components/project/Project';
//import Navigation from '../components/navigation/Navigation';
import Landing from '../components/landing/Landing';
//import App from '../App';
import ShowProject from '../components/showProject/ShowProject';
import MealKit from '../components/projectFolders/mealkit/MealKit';
import SmartHome from '../components/projectFolders/smarthome/SmartHome';
import TreatMe from '../components/projectFolders/treatme/TreatMe';
import StrangerThings from '../components/projectFolders/strangerThings/StrangerThings';
import {Route, Switch, Redirect } from 'react-router-dom';


export const Routes = ()=> {

    return (
        <div>
            {/* <App/> */}
            {/* <Navigation/> */}
            <Switch>
                <Route exact path="/Landing" component={Landing} />
                <Route exact path="/">
                    <Redirect to="/Landing" />    
                </Route>
                <Route exact path="/About" component={Home} />
                <Route exact path="/Portfolio" component={Project} />
                <Route exact path="/Portfolio-Project" component={ShowProject} />
                <Route exact path="/Portfolio-MealKit-Project" component={MealKit} />
                <Route exact path="/Portfolio-HomeAutomation-Project" component={SmartHome} />
                <Route exact path="/Portfolio-NicheMarketApp-Project" component={TreatMe} />
                <Route exact path="/Portfolio-StrangerThings3-Project" component={StrangerThings} />
                {/* <Route exact path="/Resume" render={() => (window.open = 'https://drive.google.com/file/d/1bOu8HIdF3uVLn8_SBcX9ejFHBOX5DQm9/view?usp=sharing')} /> */}
            </Switch>
        </div>
    );
}