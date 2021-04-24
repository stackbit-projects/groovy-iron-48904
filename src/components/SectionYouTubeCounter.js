import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class SectionYouTubeCounter extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="youtubecounter">
                <div>
                    <h1>
                        YouTube Subscribers Counter
                    </h1>
                    <p>
                        Let's suppose here I implement the API for the counter
                    </p>
                </div>
            </section>
        );
    }
}
