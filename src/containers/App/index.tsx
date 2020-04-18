import React from 'react';

import styles from './index.scss';

type Props = {};

const App: React.FunctionComponent<Props> = () => (
  <div className={styles.container}>
    Hello, guest!
    <br />
    Привет, гость!
  </div>
);

export default App;
