import React from 'react';
import _ from 'lodash';

import Picture from './Picture';
import {toStyleObj, withPrefix, Link, classNames} from '../utils';

export default class PromotionSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width content__row--mb-0"  data-id={_.get(section, 'section_id', null)}>
                <div className="promo">
                    <Picture {...this.props} image={_.get(section, 'image', null)} alt={_.get(section, 'title', null)} />
                    <div className="promo__message-container"  style={toStyleObj('background-image: url(\'' + withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.bg_image_product', null)) + '\')')}>
                        <h2 className="promo__title">{_.get(section, 'title', null)}</h2>
                        <p className="promo__subtitle">{_.get(section, 'subtitle', null)}</p>
                        {_.get(section, 'cta', null) && ((() => {
                            let cta_style = _.get(section, 'cta.style', null) || 'primary';
                            return (
                                <Link className={classNames('link', {'link--promo--filled': cta_style === 'primary', 'link--promo--transparent': cta_style === 'secondary', 'link--promo--simple ': cta_style === 'link'})} to={_.get(section, 'cta.url', null)}>
                                    {_.get(section, 'cta.title', null)}
                                    <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z" fill="currentColor"/></svg>
                                </Link>
                            );
                        })())}
                    </div>
                </div>
            </section>
        );
    }
}
