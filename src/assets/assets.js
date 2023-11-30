import logo from "./logo.svg";
import usd from "./usd.svg";
import eur from "./eur.svg";
import exchange from "./exchange.svg";
import switcherUp from "./switcher_up.svg";
import switcherDown from "./switcher_down.svg";
import changerLeft from "./change_curr_left.svg";
import changerRight from "./change_curr_right.svg";

export const Logo = () => <img src={logo} alt="logo" />;
export const Usd = () => <img src={usd} alt="usd" />;
export const Eur = () => <img src={eur} alt="eur" />;
export const Exchange = () => <img src={exchange} alt="exchange" className='main__bg' />;
export const SwitcherUp = () => <img src={switcherUp} alt="switcherUp" />;
export const SwitcherDown = () => <img src={switcherDown} alt="switcherDown" />;
export const ChangerLeft = () => <img src={changerLeft} style={{cursor:'pointer'}} alt="changerLeft" />;
export const ChangerRight = () => <img src={changerRight} style={{cursor:'pointer'}} alt="changerRight" />;