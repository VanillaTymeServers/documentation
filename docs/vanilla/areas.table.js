import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const areas = [
  {
    name: "Mushroom Island",
    overworld: "x-7600, z1400",
    nether: "n/a"
  },
  {
    name: "Coral Reef",
    overworld: "x-6800, z-130",
    nether: "West -852"
  },
  {
    name: "Desert",
    overworld: "x-7000, z-130",
    nether: "West -805"
  },
  {
    name: "Badlands(Mesa)",
    overworld: "x-6600, z50",
    nether: "West -805"
  },
  {
    name: "End Portal",
    overworld: "x1630, z-300",
    nether: "East 203"
  },
  {
    name: "Ice Spikes",
    overworld: "x-2000, z3000",
    nether: "n/a"
  },
  {
    name: "Mangrove",
    overworld: "x-1200, z0",
    nether: "n/a"
  },
  {
    name: "Blaze Farm",
    overworld: "n/a",
    nether: "West -3222"
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