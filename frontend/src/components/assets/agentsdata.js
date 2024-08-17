import brimstone from './valo/agents/brimstone.png';
import omen from './valo/agents/omen.png';
import viper from './valo/agents/viper.png';
import astra from './valo/agents/astra.png';

import breach from './valo/agents/breach.png';
import sova from './valo/agents/sova.png';
import skye from './valo/agents/skye.png';
import kayo from './valo/agents/kayo.png';

import jett from './valo/agents/jett.png';
import phoenix from './valo/agents/phoenix.png';
import raze from './valo/agents/raze.png';
import reyna from './valo/agents/reyna.png';

import sage from './valo/agents/sage.png';
import cypher from './valo/agents/cypher.png';
import killjoy from './valo/agents/killjoy.png';
import chamber from './valo/agents/chamber.png';

const agentsdata = [
  {
    category: "Controllers",
    agents: [
      { id: 1, name: "Brimstone", image: brimstone },
      { id: 2, name: "Omen", image: omen },
      { id: 3, name: "Viper", image: viper },
      { id: 4, name: "Astra", image: astra },
    ],
  },
  {
    category: "Initiators",
    agents: [
      { id: 5, name: "Breach", image: breach },
      { id: 6, name: "Sova", image: sova },
      { id: 7, name: "Skye", image: skye },
      { id: 8, name: "KAY/O", image: kayo },
    ],
  },
  {
    category: "Duelists",
    agents: [
      { id: 9, name: "Jett", image: jett },
      { id: 10, name: "Phoenix", image: phoenix },
      { id: 11, name: "Raze", image: raze },
      { id: 12, name: "Reyna", image: reyna },
    ],
  },
  {
    category: "Sentinels",
    agents: [
      { id: 13, name: "Sage", image: sage },
      { id: 14, name: "Cypher", image: cypher },
      { id: 15, name: "Killjoy", image: killjoy },
      { id: 16, name: "Chamber", image: chamber },
    ],
  },
];

export { agentsdata };

export const controllers = agentsdata.find(category => category.category === "Controllers").agents;
export const initiators = agentsdata.find(category => category.category === "Initiators").agents;
export const duelists = agentsdata.find(category => category.category === "Duelists").agents;
export const sentinels = agentsdata.find(category => category.category === "Sentinels").agents;
