import { useState, useEffect } from "react";

import images from "./images";
import bannerTop from "./images/BBQ-TOPO.png";

import "./styles.css";

function App() {
  const [step, setStep] = useState(false);
  const users = {
    adrianaSilva: false,
    anaLuisa: true,
    chagasJunior: false,
    claudiaPontes: false,
    danielDouglas: false,
    emanuelFelipe: true,
    ernildoPorfirio: false,
    felipeFernandes: false,
    ivonzelioLeite: true,
    januseMartins: true,
    josieneCampos: false,
    keltonBorges: true,
    liviaMayara: false,
    lucasLima: true,
    luizFelipe: false,
    marceloHenrique: false,
    mateusPorfirio: false,
    maxEmiliano: false,
    pauloLilderio: false,
    renatoFernandes: false,
    tallesLopes: false,
    viniciusChaves: false,
  };
  return <h1>Hello word</h1>;
}

export default App;
