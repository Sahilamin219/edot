import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';
import {getPage} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Category extends React.Component {
    render() {
        let store_page = getPage(this.props.pageContext.pages, '/store');
        return (
            <Layout {...this.props}>
            <main className={'content' + (_.get(store_page, 'frontmatter.page_css_class', null) ? (' ' + _.get(store_page, 'frontmatter.page_css_class', null)) : '')}>
                {_.map(_.get(store_page, 'frontmatter.sections', null), (section, section_idx) => (
                    (_.get(section, 'type', null) === 'store_section') ? ((() => {
                        let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                        let Component = components[component];
                        return (
                            <Component key={section_idx} {...this.props} section={section} page={this.props.pageContext} category_url={_.get(this.props, 'pageContext.url', null)} site={this.props.pageContext.site} />
                        );
                    })()) : (() => {
                        let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                        let Component = components[component];
                        return ((() => {
                            let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                            let Component = components[component];
                            return (
                                <Component key={section_idx} {...this.props} section={section} page={this.props.pageContext} category_url={_.get(this.props, 'pageContext.url', null)} site={this.props.pageContext.site} />
                            );
                        })());
                    })()
                ))}
            </main>
            </Layout>
        );
    }
}
