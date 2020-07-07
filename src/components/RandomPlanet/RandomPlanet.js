import React from 'react';

import SwapiServices from '../../services/SwapiServices';
import './RandomPlanet.css';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';

export default class RandomPlanet extends React.Component {

    swapi = new SwapiServices();

    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onError = () => {
        this.setState({
            error: true,
            load: false,
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false,
        });
    }

    updatePlanet = () => {
        const id = this.randomInt(1, 30);
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    randomInt = (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    render() {

        const { planet, load, error } = this.state;

        const loader = load ? <Loader /> : null;
        const content = (!load && !error) ? <PlanetView planet={planet} /> : null;
        const err = error ? <ErrorComponent /> : null;

        return (
            <div className="main-random-block">
                {err}
                {loader}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, diameter, population, gravity } = planet;
    return (
        <>
            <h3>{name}</h3>
            <div className="planet_block">
                <div className="img-block">
                    <img
                        alt="Planet"
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        onError={e => { e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg` }}
                    />
                </div>
                <ul className="inform list-group">
                    <li className="custom-rundomplan-li">
                        <span className="info_title">Diameter: </span>
                        <span className="info_content">{diameter}</span>
                    </li>
                    <li className="custom-rundomplan-li">
                        <span className="info_title">Population: </span>
                        <span className="info_content">{population}</span>
                    </li>
                    <li className="custom-rundomplan-li">
                        <span className="info_title">Gravity: </span>
                        <span className="info_content">{gravity}</span>
                    </li>
                </ul>
            </div>
        </>
    );

}