import React from 'react';
import _ from 'lodash';

import {toStyleObj, withPrefix, markdownify, Link, classNames} from '../utils';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let bg_img_opacity_pct = _.get(section, 'background_image_opacity', null) || 100;
        let bg_img_opacity = bg_img_opacity_pct * 0.01;
        return (
            <section className="hero bg-color" data-id={_.get(section, 'section_id', null)}>
                {_.get(section, 'background_image', null) && (
                  <div className="hero__img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + ';')}/>
                )}
                <div className="hero__title">{markdownify(_.get(section, 'content', null))}</div>
                <div className="link-group">
                  {_.map(_.get(section, 'actions', null), (action, action_idx) => {
                      let action_style = _.get(action, 'style', null) || 'primary';
                      return (
                        <Link key={action_idx} to={withPrefix(_.get(action, 'url', null))} className={classNames('link', {'link--filled': action_style === 'primary', 'link--transparent': action_style === 'secondary', 'link--simple ': action_style === 'link'})}>
                          {_.get(action, 'title', null)}
                          {_.get(action, 'arrow', null) && (
                          <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z" fill="currentColor"/></svg>
                          )}
                        </Link>
                      )
                  })}
                </div>
              </section>
        );
    }
}
