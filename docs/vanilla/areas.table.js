import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const areas = [
  {
    name: "Public Desert",
    overworld: "x4340, z1952",
    nether: "East 545"
  },
  {
    name: "Public Mesa",
    overworld: "x4340, z1952",
    nether: "East 545"
  },
  {
    name: "Public Mushroom Island",
    overworld: "x5300, z1694",
    nether: "East 665"
  },
  {
    name: "Public Coral Reef",
    overworld: "x5300, z1694",
    nether: "East 665"
  },
  {
    name: "Public Mangrove",
    overworld: "x4340, z1264",
    nether: "East 545"
  },
  {
    name: "Public Stronghold",
    overworld: "x192, z2288",
    nether: "South 285"
  },
  {
    name: "Public Ice Spikes",
    overworld: "x2500, z700",
    nether: "East 285"
  },
  {
    name: "Public Gravel Mountain",
    overworld: "x2260, z610",
    nether: "East 285"
  }
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
  {
    Header: "Public Area",
    accessor: "name",
    className: "pester-data-table left",
  },
  {
    Header: "Overworld",
    accessor: "overworld",
    className: "pester-data-table left",
  },
  {
    Header: "Nether",
    accessor: "nether",
    className: "pester-data-table",
  },
];