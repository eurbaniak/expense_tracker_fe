import { useState } from "react";
import { Group, Code, Text, Button, Modal } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconReceipt2,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./navbar.module.scss";
import { useAuth } from "../../../../utils/AuthContext";
import { useDisclosure } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconBellRinging },
  { link: "/dashboard/expenses", label: "My Expenses", icon: IconReceipt2 },
  { link: "/dashboard/account", label: "Account", icon: IconFingerprint },
];

export function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const links = data.map((item) => (
    <span
      className={classes.link}
      data-active={item.link === active || undefined}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.link);
        navigate(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.3} />
      <span>{item.label}</span>
    </span>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "teal", to: "cyan" }}
            inherit
            fw={700}
          >
            Expense Guardian
          </Text>
          <Code fw={700}>v0.0.1</Code>
        </Group>
        {links}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Logout"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        Are you sure you want to logout?
        <Group justify="end" mt={20}>
          <Button variant="default" onClick={close}>
            Cancel
          </Button>
          <Button onClick={async () => await logout()}>Logout</Button>
        </Group>
      </Modal>

      <div className={classes.footer}>
        <Button variant="outline" leftSection={<IconLogout />} onClick={open}>
          Logout
        </Button>
      </div>
    </nav>
  );
}
