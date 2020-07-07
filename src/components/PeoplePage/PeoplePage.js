import React from 'react';
import './PeoplePage.css';

import PeoplesList from '../PeoplesList';
import DetailsInfo from '../DetailsInfo';
import SwapiServices from '../../services/SwapiServices';

export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: null,
    }

    swapi = new SwapiServices();

    onSelectPerson = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {

        const { selectedPerson } = this.state;

        const PeopleItemsList = (
            <PeoplesList
                onItemClick={this.onSelectPerson}
                renderItem={(item) =>
                    `${item.name} (${item.gender}, ${item.mass}kg)`}
            />
        );

        const PeopleDetailsInfo = (
            <DetailsInfo
                itemId={selectedPerson}
                getData={this.swapi.getPerson}
                itemInfo={
                    ['gender', 'mass', 'birthDate']
                }
                srcImg={`https://starwars-visualguide.com/assets/img/characters/`}
            />
        );

        return (
            <div className="main-people-page all-container">
                <div className="left-block">
                    {PeopleItemsList}
                </div>
                <div className="right-block">
                    {PeopleDetailsInfo}
                </div>
            </div>
        )
    }
}