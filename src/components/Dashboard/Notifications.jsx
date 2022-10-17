import { Circle } from "@mui/icons-material";
import { List, ListItem, ListItemIcon } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const notifications = [
  {
    topic: "Announcement",
    message: [
      {
        text: "This is a notification 1",
        viewed: true,
      },
      {
        text: "This is a notification 2",
        viewed: false,
      },
      {
        text: "This is a notification 3",
        viewed: false,
      },
    ],
  },
  {
    topic: "Account Notifications",
    message: [
      {
        text: "This is a notification 1",
        viewed: false,
      },
      {
        text: "This is a notification 2",
        viewed: true,
      },
      {
        text: "This is a notification 3",
        viewed: true,
      },
    ],
  },
];

export default function Notifications() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 325,
        cursor: "pointer",
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {notifications.map((n, i) => (
        <li key={`section-${i}`}>
          <ul>
            <ListSubheader>{n.topic}</ListSubheader>
            {n.message.map((m, index) => (
              <ListItem key={`${i}-${index}`}>
                <ListItemIcon>
                  <Circle
                    style={{
                      color: m.viewed
                        ? "var(--city-green)"
                        : "var(--city-orange)",
                    }}
                  />
                </ListItemIcon>
                <ListItemText secondary={m.text} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
