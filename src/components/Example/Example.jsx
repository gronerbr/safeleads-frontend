import React from 'react';
import { Link } from 'react-router-dom';
import { COUNTER } from '../../utils/routeMap';

const Example = () => (
  <div>
    <p>
      It{"'"}s an example of React component.
      You can navigate to
        &nbsp;
        <Link to={COUNTER}>
          Counter
        </Link>
        &nbsp;
      to see another page.
    </p>
  </div>
);

export default Example;
