import React from 'react';
import _ from 'lodash';

import FeaturedGrid from './FeaturedGrid';

export default class FeaturedProductsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let featured_products = _.get(section, 'featured_products', null);
        return (
            <section className="content__row"  data-id={_.get(section, 'section_id', null)}>
                    <h2 className={'content__row-title' + (_.get(section, 'light_title', null) ? (' content__row-title--light') : '')}>
                        {_.get(section, 'icon', null) && (
                        <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.152 3.4188C27.2129 1.75821 21.3251 -3.80243 14.4999 4.24829C7.33226 -3.80243 1.78532 1.75821 0.847792 3.4188C-0.859337 6.48936 0.164613 11.138 2.55492 13.3791L14.5015 25L26.4482 13.3791C28.8352 11.138 29.8592 6.49096 28.1521 3.4188H28.152Z"/>
                        </svg>
                        )}
                        {_.get(section, 'title', null)}
                    </h2>
                    <FeaturedGrid {...this.props} products={featured_products} site={this.props.pageContext.site} />
                </section>
        );
    }
}
