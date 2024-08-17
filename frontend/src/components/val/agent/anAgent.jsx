import React from "react";

const Agent = (agent) => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Information Section */}
      <div className="w-full md:w-1/2 p-4">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "tungsten" }}
        >
          this is name: {agent.name}
        </h1>

        <div className="flex flex-wrap gap-4">
          {/* Role Images */}
          <div className="w-16 h-16 bg-gray-200">
            this is role: {agent.role}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4 bg-gray-300">
        <div className="w-full h-full bg-gray-200">
          this is agent image:{agent.image}
        </div>
      </div>
    </div>
  );
};

export default Agent;
