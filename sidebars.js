/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    "introduction",
    "dynmap",
    "mods",
    "voting",
    {
      type: "category",
      label: "Collectibles & Trophies",
      items: [
        "collectibles/collectibles",
        "collectibles/current"
      ]
    },
    {
      type: "category",
      label: "Comps & Events",
      items: [
         "comps/build",
         "comps/weekly",
         "comps/events"
      ]
    },
    {
      type: "category",
      label: "Vanilla Tyme Server",
      link: {type: "doc", id: "vanilla/index"},
      items: [
        {
          type: "doc",
          id: "vanilla/public-areas",
          label: "Public Areas"
        }
      ]
    },
    {
      type: "category",
      label: "Semi-Vanilla Tyme Server",
      link: {type: "doc", id: "semi/index"},
      items: [
        {
          type: "doc",
          id: "semi/public-areas",
          label: "Public Areas"
        },
        {
          type: "doc",
          id: "semi/chairs",
          label: "Chairs"
        },
        {
          type: "doc",
          id: "semi/fishing",
          label: "Fishing"
        },
        {
          type: "doc",
          id: "semi/mcmmo",
          label: "mcMMO"
        },
        {
          type: "doc",
          id: "semi/quests",
          label: "Quests"
        },
        {
          type: "doc",
          id: "semi/tp",
          label: "Teleportation"
        }
      ]
    },
    {
      type: "category",
      label: "Creative Server",
      link: {type: "doc", id: "creative/index"},
      items: [
        "creative/plots"
      ]
    },
    "uhc",
    "commands",
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/litematica",
        "guides/portals",
        "guides/discordlink"
      ]
    }
  ]
};

module.exports = sidebars;
