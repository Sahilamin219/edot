import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, getPageByFilePath} from '../utils';
import Picture from './Picture';
import SmallBuyButton from './SmallBuyButton';

export default class ProductGridItem extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        return (
            <li className="product-grid__item">
                <Link to={withPrefix(_.get(product_page, 'url', null))}>
                    <figure className="product-grid__item-figure js-figure-link">
                        <Picture {...this.props} image={_.get(product_page, 'frontmatter.default_thumbnail_image', null)} alt={_.get(product_page, 'frontmatter.title', null)} cssClass={'product-grid__item-image'} />
                        <figcaption>
                            <SmallBuyButton {...this.props} product_page={product_page} component={'product-grid'} />
                        </figcaption>
                    </figure>
                </Link>
                <div className="product-grid__definition">
                    <Link to={withPrefix(_.get(product_page, 'url', null))}><h3 className="product-grid__title">{_.get(product_page, 'frontmatter.title', null)}</h3></Link>
                    {_.get(product_page, 'frontmatter.category', null) && ((() => {
                        let category_page = getPageByFilePath(this.props.pageContext.pages, _.get(product_page, 'frontmatter.category', null));
                        return (
                            <span className="product-grid__category"> {_.get(category_page, 'frontmatter.title', null)} </span>
                        );
                    })())}
                    <span className="product-grid__price"> ${_.get(product_page, 'frontmatter.price', null)} </span>
                </div>
            </li>
        );
    }
}
