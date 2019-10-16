import React from 'react';
import PartSelectorItems from './PartSelectorItems.js';

class PartSelector extends React.Component {
    render() {
        return Object.keys(this.props.features).map((feature, idx) => {
            
            return <PartSelectorItems 
                features = {this.props.features}
                selected = {this.props.selected}
                updateFeature = {this.props.updateFeature}
                USCurrencyFormat = {this.props.USCurrencyFormat}
                feature = {feature}
                idx = {idx}/>
        });
    };
}

export default PartSelector;