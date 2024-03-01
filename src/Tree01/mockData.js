const data = {
  "Life": {
    "description": "All living organisms on Earth.",
    children: {
      "Bacteria": {
        "description": "Single-celled microorganisms that lack a nucleus.",
        "habitat": ["SOIL", "WATER", "LIVING_ORGANISMS"],
        "diet": ["AUTOTROPH", "HETEROTROPH"],
        color: '#2E8B57',
        "fun_fact": "Some bacteria can survive in extreme conditions such as boiling water or acidic environments.",
        children: {
          "Proteobacteria": {
            color: '#32CD32',
            "description": "A major group of bacteria including many pathogens and symbionts.",
            "habitat": ["SOIL", "WATER"],
            "diet": ["AUTOTROPH", "HETEROTROPH"],
            "fun_fact": "Some Proteobacteria have versatile metabolic capabilities, allowing them to thrive in various environments.",
            children: {
              "Alphaproteobacteria": {
                color: '#00FF00',
                "description": "A class of Proteobacteria including many species capable of nitrogen fixation.",
                "habitat": ["SOIL", "WATER", "PLANT_ROOTS"],
                "diet": ["AUTOTROPH", "HETEROTROPH"],
                "fun_fact": "Some Alphaproteobacteria form symbiotic relationships with plants, helping them fix nitrogen."
              },
              "Betaproteobacteria": {
                color: '#00FF7F',
                "description": "A class of Proteobacteria containing many soil and water bacteria.",
                "habitat": ["SOIL", "WATER"],
                "diet": ["AUTOTROPH", "HETEROTROPH"],
                "fun_fact": "Betaproteobacteria play important roles in nutrient cycling in soil and water ecosystems."
              }
            },
          },
          "Firmicutes": {
            "description": "A phylum of bacteria with a thick, rigid cell wall.",
            color: '#98FB98',
            "habitat": ["SOIL", "WATER", "GI_TRACT"],
            "diet": ["AUTOTROPH", "HETEROTROPH"],
            "fun_fact": "Some Firmicutes are used in food production processes such as cheese and yogurt making."
          }
        },
      },
      "Archaea": {
        "description": "Single-celled microorganisms similar to bacteria but with distinct genetics and biochemistry.",
        "habitat": ["EXTREME_ENVIRONMENTS"],
        "diet": ["AUTOTROPH", "HETEROTROPH"],
        "fun_fact": "Some Archaea thrive in extreme environments like hot springs and deep-sea vents, where other organisms cannot survive.",
        children: {
          "Euryarchaeota": {
            "description": "A phylum of Archaea including many extremophiles.",
            "habitat": ["EXTREME_ENVIRONMENTS"],
            "diet": ["AUTOTROPH", "HETEROTROPH"],
            "fun_fact": "Euryarchaeota includes methanogenic archaea, which produce methane gas as a metabolic byproduct."
          }
        }
      },
      "Eukarya": {
        "description": "Organisms with cells containing a true nucleus and organelles.",
        "habitat": ["TERRESTRIAL", "FRESHWATER", "MARINE"],
        "diet": ["AUTOTROPH", "HETEROTROPH"],
        "fun_fact": "Eukaryotic organisms range from microscopic algae to towering trees and from tiny insects to blue whales, showcasing remarkable diversity.",
        children: {
          "Plantae": {
            "description": "Multicellular organisms capable of photosynthesis.",
            "habitat": ["TERRESTRIAL", "FRESHWATER", "MARINE"],
            "diet": ["AUTOTROPH"],
            "fun_fact": "Plants produce oxygen as a byproduct of photosynthesis, which is vital for the survival of many other organisms on Earth.",
            children: {
              "Magnoliophyta": {
                "description": "Flowering plants, also known as angiosperms.",
                "habitat": ["FORESTS", "GRASSLANDS", "WETLANDS"],
                "diet": ["AUTOTROPH"],
                "fun_fact": "Flowering plants are the most diverse group of plants on Earth, with over 300,000 species."
              }
            }
          },
          "Animalia": {
            "description": "Multicellular organisms that are heterotrophic and usually mobile.",
            "habitat": ["TERRESTRIAL", "FRESHWATER", "MARINE"],
            "diet": ["HETEROTROPH"],
            "fun_fact": "Animals exhibit a wide range of behaviors, from intricate social interactions to remarkable hunting techniques.",
            children: {
              "Chordata": {
                "description": "A phylum of animals characterized by a notochord.",
                "habitat": ["TERRESTRIAL", "FRESHWATER", "MARINE"],
                "diet": ["HETEROTROPH"],
                "fun_fact": "Chordates include diverse animals such as mammals, birds, reptiles, amphibians, and fish."
              }
            }
          }
        },
      }
    },
  }
}

export default data;