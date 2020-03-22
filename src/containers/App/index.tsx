import React from 'react';

import styles from './index.scss';

type Props = {};

const App: React.FunctionComponent<Props> = () => (
  <div className={styles.container}>
    <span>{`Hello, guest!`}</span>
  </div>
);

export default App;
