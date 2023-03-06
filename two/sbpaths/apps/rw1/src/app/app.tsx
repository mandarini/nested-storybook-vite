// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Rlw1 } from '@sbpaths/rlw1';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="rw1" />
      <Rlw1 />
      <div />
    </>
  );
}

export default App;
