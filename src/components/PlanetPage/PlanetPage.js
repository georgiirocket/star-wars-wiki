import React from 'react';
import './PlanetPage.css';

import DetailsInfo from '../DetailsInfo';
import SwapiServices from '../../services/SwapiServices';
import PlanetsList from '../PlanetsList';

export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: null,
    }

    swapi = new SwapiServices();

    onSelectPlanet = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    render() {

        const itemsList = (
            <PlanetsList
                onItemClick={this.onSelectPlanet}
                renderItem={(item) =>
                    `${item.name} (${item.diameter} km)`}
            />
        );

        const detailsInfo = (
            <DetailsInfo
                itemId={this.state.selectedPlanet}
                getData={this.swapi.getPlanet}
                itemInfo={
                    ['diameter', 'population', 'gravity']
                }
                srcImg={`https://starwars-visualguide.com/assets/img/planets/`}
            />
        );

        return (
            <div className="main-planet-page all-container">
                <div className="left-block">
                    {itemsList}
                </div>
                <div className="right-block">
                    {detailsInfo}
                </div>
            </div>
        )
    }
}
