import React from 'react';
import './StarshipsPage.css';

import DetailsInfo from '../DetailsInfo';
import SwapiServices from '../../services/SwapiServices';
// import Row from '../Row';
import StarshipsList from '../StarshipsList';

export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: null,
    }

    swapi = new SwapiServices();

    onSelectStarship = (id) => {
        this.setState({
            selectedStarship: id
        });
    }

    render() {

        const itemsList = (
            <StarshipsList
                onItemClick={this.onSelectStarship}
                renderItem={(item) =>
                    `${item.name} (${item.model})`}
            />
        );

        const detailsInfo = (
            <DetailsInfo
                itemId={this.state.selectedStarship}
                getData={this.swapi.getStarship}
                itemInfo={
                    ['model', 'passengers', 'starshipClass']
                }
                srcImg={`https://starwars-visualguide.com/assets/img/starships/`}
            />
        );

        return (
            <div className="main-starships-page all-container">
                {/* <Row
                    left={itemsList}
                    right={detailsInfo}
                />  */}
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
