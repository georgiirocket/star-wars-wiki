import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import PlanetPage from '../PlanetPage';

import SwapiContext from "../SwapiServiceContext";

import { BrowserRouter as Router, Route } from "react-router-dom";
import StarshipsPage from '../StarshipsPage';




export default class App extends React.Component {

    state = {
        isRandomPlanet: true,
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {
                isRandomPlanet: !prevState.isRandomPlanet,
            }
        });
    }

    render() {
        return (
            <SwapiContext.Provider value={this.swapi}>
                <Router>
                    <div className="main-app">
                        <Header />
                        <Route path="/" exact>
                            <h2 className="center">Welcome aboard!!!!</h2>
                            <p className="center">
                                You can view part of the Star Wars world by clicking on the top tabs.
                            </p>
                        </Route>
                        {this.state.isRandomPlanet && <RandomPlanet />}

                        <Route path="/planets">
                            <h3>Planets</h3>
                            <PlanetPage />
                        </Route>

                        <Route path="/peoples">
                            <h3>People</h3>
                            <PeoplePage />
                        </Route>

                        <Route path="/starships">
                            <h3>Starships</h3>
                            <StarshipsPage />
                        </Route>

                    </div>
                </Router>
            </SwapiContext.Provider>
        );
    }
}

