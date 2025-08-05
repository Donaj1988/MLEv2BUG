export function getDefaultGameState() {
  return {
    resources: {
      wood: 0,
      stone: 0,
      grain: 0,
      population: 5,
    },
    storageLimits: {
      wood: 100,
      stone: 100,
      grain: 100,
      population: 10,
    },
    buildings: {
      house: {
        cost: { wood: 10, stone: 5 },
        effect: { population: 2 },
        count: 0,
      },
    },
    workerSlots: {
      wood: 5,
      stone: 5,
      grain: 5,
      builder: 2,
    },
    assignedWorkers: {
      wood: 0,
      stone: 0,
      grain: 0,
      builder: 0,
    },
    population: 5,
    buildingQueue: [],
  };
}

export const state = getDefaultGameState();

export function startGameLoop() {
  setInterval(() => {
    state.resources.wood += state.assignedWorkers.wood;
    state.resources.stone += state.assignedWorkers.stone;
    state.resources.grain += state.assignedWorkers.grain;
  }, 1000);
}
