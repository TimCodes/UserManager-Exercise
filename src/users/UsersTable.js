import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";

const columns = [
  {
    field: "name",
    headerName: "Team Member",
    width: 180,
    renderCell: (params) => {
      return (
        <>
          <Avatar
            alt="Avatar Image"
            src={params.getValue("cached_avatar")}
            component="span"
            style={{ marginRight: "10px" }}
          />
          {"    "}
          {params.value}{" "}
        </>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "invites",
    headerName: "Invites",
    width: 180,
  },
  {
    field: "campaigns",
    headerName: "Campaigns",
    width: 180,

  },
  { field: "created_at", headerName: "Date Created", width: 180 },
];

const UsersTable = ({ users }) => (
  <DataGrid
    rows={users}
    columns={columns}
    pageSize={5}
    disableMultipleSelection
  />
);

export default UsersTable;
