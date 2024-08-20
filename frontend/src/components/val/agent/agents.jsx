import React from "react";
import {
  controllers,
  initiators,
  duelists,
  sentinels,
} from "../../assets/agentsdata";
import Agent from "./anAgent";

const AgentsList = () => {
  const renderAgents = (agents, roleImage) => {
    return agents.map((agent) => (
      <div key={agent.id} className="mb-4">
        <Agent
          name={agent.name}
          role={agent.role}
          roleImage={roleImage}
          image={agent.image}
        />
      </div>
    ));
  };

  return (
    <div className="p-4 bg-[#ece8e1]">
      <h2 className="text-[#0f1923] tracking-wide uppercase text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold" style={{fontFamily:"tungsten"}}>Controllers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderAgents(controllers, controllers[0].roleImage)}
      </div>

      <h2 className="text-[#0f1923] tracking-wide uppercase text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4" style={{fontFamily:"tungsten"}}>Initiators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderAgents(initiators, initiators[0].roleImage)}
      </div>

      <h2 className="text-[#0f1923] tracking-wide uppercase text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4" style={{fontFamily:"tungsten"}}>Duelists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderAgents(duelists, duelists[0].roleImage)}
      </div>

      <h2 className="text-[#0f1923] tracking-wide uppercase text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4" style={{fontFamily:"tungsten"}}>Sentinels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderAgents(sentinels, sentinels[0].roleImage)}
      </div>
    </div>
  );
};

export default AgentsList;
