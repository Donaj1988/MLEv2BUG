// logic.js – fixed version with assignedWorkers

export function getDefaultGameState() {
  return {
    resources: {
      wood: 0,
      stone: 0,
      clay: 0,
      grain: 0,
    },
    assignedWorkers: {
      wood: 0,
      stone: 0,
      clay: 0,
      grain: 0,
    },
    buildings: {},
    population: {
      total: 0,
      free: 0
    }
  };
}

export function startGameLoop(state) {
  setInterval(() => {
    state.resources.wood += state.assignedWorkers.wood;
    state.resources.stone += state.assignedWorkers.stone;
    state.resources.clay += state.assignedWorkers.clay;
    state.resources.grain += state.assignedWorkers.grain;
  }, 1000);
}
