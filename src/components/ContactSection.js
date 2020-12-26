import React from 'react';
import _ from 'lodash';

import {withPrefix, Link} from '../utils';

export default class ContactSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width content__row--mb-0  faq__contact"  data-id={_.get(section, 'section_id', null)}>
              {_.get(section, 'image', null) && (<img src={withPrefix(_.get(section, 'image', null))} alt="" className="faq__contact-image"/>)}
              <div className="faq__contact-text-container">
                <h3 className="faq__contact-title">Have any questions? <br/> Contact us.</h3>
                <div className="faq__contact-info-container">
                  <p className="faq__contact-address">{_.get(section, 'address', null)}</p>
                  <p className="faq__contact-telephone">{_.get(section, 'phone', null)}</p>
                  <p className="faq__contact-email">{_.get(section, 'email', null)}</p>
                  <div className="faq__seperator" />
                  {_.get(section, 'mapUrl', null) && (
                  <Link className="faq__map-link link link--filled link--reversed" to={_.get(section, 'mapUrl', null)}>
                    On the map
                    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.25031 0C3.67589 0 0 3.67445 0 8.25031C0 12.8247 8.25031 24 8.25031 24C8.25031 24 16.5006 12.8247 16.5006 8.25031C16.5006 3.67445 12.8247 0 8.25031 0ZM8.25031 11.9993C6.15084 11.9993 4.49991 10.3498 4.49991 8.24888C4.49991 6.1494 6.1494 4.49847 8.25031 4.49847C10.3498 4.49847 12.0007 6.14796 12.0007 8.24888C12.0007 10.3498 10.3498 11.9993 8.25031 11.9993Z" fill="white"/>
                    </svg>
                  </Link>
                  )}
                </div>
              </div>
            </section>
        );
    }
}
