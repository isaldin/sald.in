import React from 'react';

import styles from './index.scss';

type Props = {};

const App: React.FunctionComponent<Props> = () => (
  <div className={styles.App}>
    <span>{`Hello, user`}</span>
  </div>
);

export default App;
