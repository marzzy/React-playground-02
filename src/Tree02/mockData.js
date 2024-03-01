const data = {
  rootId: "Life",
  entities: {
    "Life": {
      id: "Life",
      "description": "All living organisms on Earth.",
      childrenIds: ["Bacteria", "Eukarya", "Archaea"]
    },
    "Bacteria": {
      id: "Bacteria",
      "description": "Single-celled microorganisms that lack a nucleus.",
      color: '#2E8B57',
      childrenIds: ["Proteobacteria", "Firmicutes"]
    },
    "Proteobacteria": {
      id: "Proteobacteria",
      color: '#32CD32',
      "description": "A major group of bacteria including many pathogens and symbionts.",
      childrenIds: ["Alphaproteobacteria", "Betaproteobacteria"]
    },
    "Alphaproteobacteria": {
      id: "Alphaproteobacteria",
      color: '#00FF00',
      "description": "A class of Proteobacteria including many species capable of nitrogen fixation.",
    },
    "Betaproteobacteria": {
      id: "Betaproteobacteria",
      color: '#00FF7F',
      "description": "A class of Proteobacteria containing many soil and water bacteria.",
    },
    "Firmicutes": {
      id: "Firmicutes",
      "description": "A phylum of bacteria with a thick, rigid cell wall.",
      color: '#98FB98',
    },
    "Eukarya": {
      "description": "Organisms with cells containing a true nucleus and organelles.",
      id: "Eukarya",
      childrenIds: ["Plantae", "Animalia"]
    },
    "Animalia": {
      id: "Animalia",
      "description": "Multicellular organisms that are heterotrophic and usually mobile.",
      childrenIds: ["Chordata"]
    },
    "Chordata": {
      id: "Chordata",
      "description": "A phylum of animals characterized by a notochord."
    },
    "Plantae": {
      id: "Plantae",
      "description": "Multicellular organisms capable of photosynthesis.",
      childrenIds: ["Magnoliophyta"]
    },
    "Magnoliophyta": {
      id: "Magnoliophyta",
      "description": "Flowering plants, also known as angiosperms.",
    },
    "Archaea": {
      id: "Archaea",
      "description": "Single-celled microorganisms similar to bacteria but with distinct genetics and biochemistry.",
      childrenIds: ["Euryarchaeota"]
    },
    "Euryarchaeota": {
      id: "Euryarchaeota",
      "description": "A phylum of Archaea including many extremophiles.",
    }
  },
};

export default data;