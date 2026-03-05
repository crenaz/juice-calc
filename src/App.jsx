import { createSignal } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';

const FRUITS = [
  { id: 'lemon',       label: 'Lemon',        multiplier: 20 },
  { id: 'lime',        label: 'Lime',         multiplier: 25 },
  { id: 'orange',      label: 'Orange',       multiplier: 10 },
  { id: 'grapefruit',  label: 'Grapefruit',   multiplier: 6  },
  { id: 'clementine',  label: 'Clementine',   multiplier: 20 },
  { id: 'bloodorange', label: 'Blood Orange', multiplier: 12 },
  { id: 'rhubarb',     label: 'Rhubarb',      multiplier: 15 },
  { id: 'celery',      label: 'Celery',       multiplier: 10 },
  { id: 'ginger',      label: 'Ginger',       multiplier: 16 },
  { id: 'carrot',      label: 'Carrot',       multiplier: 30 },
];

function FruitRow({ label, multiplier }) {
  const [qty, setQty] = createSignal(1);
  const [result, setResult] = createSignal('');

  const calc = () => setResult(qty() * multiplier);

  return (
    <>
      {label}:{' '}
      <input type="number" value={qty()} onInput={e => setQty(Number(e.target.value))} />
      <input type="button" value="calc" onClick={calc} />
      {' '}<span>{result()}</span>
      <br /><br />
    </>
  );
}

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          <code>This is the rebuilt Juice-calc</code>
        </p>
        <form onSubmit={e => e.preventDefault()}>
          {FRUITS.map(f => <FruitRow label={f.label} multiplier={f.multiplier} />)}
        </form>
      </header>
    </div>
  );
}

export default App;
