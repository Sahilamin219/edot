import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {toStyleObj, withPrefix, Link, getPageByFilePath, getPages} from '../utils';
import Picture from '../components/Picture';
import BuyButton from '../components/BuyButton';
import ProductGrid from '../components/ProductGrid';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Product extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <main className="content">
                    <section className="product content__row content__row--full-width">
                        <div className="product__background-left-overlay" />
                        <div className="product__background-left" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.bg_image_primary', null)) + '\')')}/>
                        <div className="product__background-right" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.bg_image_secondary', null)) + '\')')}/>
                        <div className="product__header">
                            <Link to={withPrefix('/store')} className="product__back-to-store-link">
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.73859 4.30914H19.75V5.59286H2.63961L6.06986 8.98864L5.17449 9.875L0.25 5L5.17449 0.125L6.06986 1.01136L2.73859 4.30914Z" fill="currentColor"/>
                                </svg>
                                see all products
                            </Link>
                        </div>
                        <figure className="product__figure">
                            <Picture {...this.props} image={_.get(this.props, 'pageContext.frontmatter.default_original_image', null)} alt={_.get(this.props, 'pageContext.frontmatter.title', null)} cssClass={'product__image'} />
                        </figure>
                        <div className="product__details">
                            <h1 className="product__title">
                                {_.get(this.props, 'pageContext.frontmatter.title', null)}
                            </h1>
                            {_.get(this.props, 'pageContext.frontmatter.category', null) && ((() => {
                                let category_page = getPageByFilePath(this.props.pageContext.pages, _.get(this.props, 'pageContext.frontmatter.category', null));
                                return (
                                    <h2 className="product__category">
                                        <Link to={withPrefix(_.get(category_page, 'url', null))}> {_.get(category_page, 'frontmatter.title', null)} </Link>
                                    </h2>
                                );
                            })())}
                            <div className="product__price">
                                ${_.get(this.props, 'pageContext.frontmatter.price', null)}
                            </div>
                            <article className="product__description">
                                {_.get(this.props, 'pageContext.frontmatter.description', null)}
                            </article>
                            <BuyButton {...this.props} product_page={this.props.pageContext} />
                        </div>
                    </section>
                    {_.get(this.props, 'pageContext.frontmatter.category', null) && ((() => {
                        let product_pages = _.filter(_.orderBy(getPages(this.props.pageContext.pages, '/products'), 'frontmatter.order'), item => _.get(item, 'frontmatter.id') != _.get(this.props, 'pageContext.frontmatter.id', null));
                        let category_page = getPageByFilePath(this.props.pageContext.pages, _.get(this.props, 'pageContext.frontmatter.category', null));
                        return (
                            <section className="content__row">
                                <h2 className="content__row-title">Related</h2>
                                <ProductGrid {...this.props} product_pages={product_pages} category_url={_.get(category_page, 'url', null)} cssClass={'store__product-grid'} site={this.props.pageContext.site} />
                            </section>
                        );
                    })())}
                    <Link to={withPrefix('/store')} className="content__row content__row--full-width content__row--mb-0 product__back-to-store" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.bg_image_product', null)) + '\')')}>
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.73859 4.30914H19.75V5.59286H2.63961L6.06986 8.98864L5.17449 9.875L0.25 5L5.17449 0.125L6.06986 1.01136L2.73859 4.30914Z" fill="white"/>
                        </svg>
                        see all products
                    </Link>
                </main>
            </Layout>
        );
    }
}
