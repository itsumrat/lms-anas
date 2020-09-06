import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import FramerMatterCycleService from 'modules/framerMatterCycle/framerMatterCycleService';

class FramerMatterCycleAutocompleteFormItem extends Component {
    fetchFn = (value) => {
        return FramerMatterCycleService.listAutocomplete(value, 10);
    };

    mapper = {
        toAutocomplete(value) {
            if (!value) {
                return undefined;
            }

            const key = value.id;
            let label = value.label;

            if (value['id']) {
                label = value['id'];
            }

            return {
                key,
                label,
            };
        },

        toValue(value) {
            if (!value) {
                return undefined;
            }

            return {
                id: value.key,
                label: value.label,
            };
        },
    };

    render() {
        return (
            <AutocompleteFormItem
                {...this.props}
                fetchFn={this.fetchFn}
                mapper={this.mapper}
            />
        );
    }
}

export default FramerMatterCycleAutocompleteFormItem;