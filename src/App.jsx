import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          <code>This is the rebuilt Juice-calc</code>
        </p>
        <form action="/">
          Lemon: <input type="number" id="lemon" value="1" /><input type="button" value="calc" id="lemonb" /> <span id="lemonp"></span><br /><br />
          Lime: <input type="number" id="lime" value="1" /><input type="button" value="calc" id="limeb" /> <span id="limep"></span><br /><br />
          Orange: <input type="number" id="orange" value="1" /><input type="button" value="calc" id="orangeb" /> <span id="orangep"></span><br /><br />
          Grapefruit: <input type="number" id="grapefruit" value="1" /><input type="button" value="calc" id="grapefruitb" /> <span id="grapefruitp"></span><br /><br />
          Clementine: <input type="number" id="clementine" value="1" /><input type="button" value="calc" id="clementineb" /> <span id="clementinep"></span><br /><br />
          Blood Orange: <input type="number" id="bloodorange" value="1" /><input type="button" value="calc" id="bloodorangeb" /> <span id="bloodorangep"></span><br /><br />
          Rhubarb: <input type="number" id="rhubarb" value="1" /><input type="button" value="calc" id="rhubarbb" /> <span id="rhubarbp"></span><br /><br />
          Celery: <input type="number" id="celery" value="1" /><input type="button" value="calc" id="celeryb" /> <span id="celeryp"></span><br /><br />
          Ginger: <input type="number" id="ginger" value="1" /><input type="button" value="calc" id="gingerb" /> <span id="gingerp"></span><br /><br />
          Carrot: <input type="number" id="carrot" value="1" /><input type="button" value="calc" id="carrotb" /> <span id="carrotp"></span><br /><br />
        </form>
      </header>
    </div>
  );
}

export default App;
