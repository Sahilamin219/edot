import React from 'react';
import _ from 'lodash';

export default class TestimonialsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let testimonials = _.get(section, 'testimonials', null);
        return (
            <section className="content__row" data-id={_.get(section, 'section_id', null)}>
                <h2 className="content__row-title">Testimonials</h2>
                <div className="quotes">
                    {_.map(testimonials, (testimonial, testimonial_idx) => (<React.Fragment key={testimonial_idx + '.2'}>
                    <div key={testimonial_idx} className="quotes__item">
                        <svg className="quotes__icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 14.1818L4.57143 0H9.52381L5.71429 13.2893H9.52381V24H0V14.1818ZM14.4762 14.1818L19.0476 0H24L20.1905 13.2893H24V24H14.4762V14.1818Z" />
                        </svg>
                        <div className="quotes__text">{_.get(testimonial, 'text', null)}</div>
                        <div className="quotes__author">{_.get(testimonial, 'author.name', null)}<span className="quotes__location">,
                                {_.get(testimonial, 'author.location', null)}</span></div>
                    </div>
                    <div key={testimonial_idx + '.1'} className="quotes__separator" />
                    </React.Fragment>))}
                </div>
            </section>
        );
    }
}
