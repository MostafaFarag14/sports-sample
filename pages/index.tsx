import type { NextPage } from "next";
import { leagueStandings } from "../utils/constants";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "rank",
    headerName: "",
    width: 80,
    valueGetter: (params: GridValueGetterParams) => params.row.rank,
  },
  {
    field: "Team",
    headerName: "Team",
    width: 200,
    valueGetter: (params: GridValueGetterParams) => params.row.team.name,
  },
  {
    field: "P",
    headerName: "P",
    width: 130,
    valueGetter: (params: GridValueGetterParams) => params.row.all.played,
  },
  {
    field: "W",
    headerName: "W",
    width: 130,
    valueGetter: (params: GridValueGetterParams) => params.row.all.win,
  },
  {
    field: "D",
    headerName: "D",
    width: 130,
    valueGetter: (params: GridValueGetterParams) => params.row.all.draw,
  },
  {
    field: "L",
    headerName: "L",
    width: 130,
    valueGetter: (params: GridValueGetterParams) => params.row.all.lose,
  },
  {
    field: "Pts",
    headerName: "Pts",
    width: 130,
    valueGetter: (params: GridValueGetterParams) => params.row.points,
  },
];

const rows = leagueStandings.response?.[0]?.league?.standings?.[0];

const Home: NextPage = () => {
  return (
    <Box padding={4}>
      <Typography variant="h4" textAlign="center" marginBottom={2}>
        Premier League Table
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.team.id}
        density="compact"
        hideFooter
      />
    </Box>
  );
};

export default Home;
