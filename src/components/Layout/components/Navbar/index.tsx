import { useState } from "react";
import {
  Group,
  Code,
  Text,
  Button,
  Divider,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconReceipt2,
  IconLogout,
  IconAt,
  IconHome,
} from "@tabler/icons-react";
import classes from "./navbar.module.scss";
import { useDisclosure } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "../../../../api/queries";
import LogoutModal from "../LogoutModal";

const router = [
  { link: "/dashboard", label: "Dashboard", icon: IconBellRinging },
  { link: "/dashboard/expenses", label: "My Expenses", icon: IconReceipt2 },
  { link: "/dashboard/account", label: "Account", icon: IconFingerprint },
];

export function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const { data } = useGetCurrentUser();
  const currentUser = data?.currentUser;

  const email = currentUser?.email;
  const username = currentUser?.username;

  const links = router.map((item: any) => (
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

  if (!data) {
    return null;
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <h3>
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "teal", to: "cyan" }}
              inherit
              fw={700}
            >
              Expense Guardian
            </Text>
          </h3>
          <Code fw={700}>v0.0.1</Code>
        </Group>
        <Group wrap="nowrap" mb={25} justify="center">
          <div>
            <Text fz="lg" fw={500} ta="center">
              {username}
            </Text>
            <Group wrap="nowrap" gap={10} mt={3}>
              <IconAt stroke={1} size={15} />
              <Text c="dimmed">{email}</Text>
            </Group>
          </div>
        </Group>
        <Divider mb={25} />
        {links}
      </div>

      <LogoutModal opened={opened} close={close} />

      <Divider mb={25} />
      <Group justify="center" gap="xs">
        <Tooltip label="Go back to Home" color="teal">
          <ActionIcon
            variant="outline"
            onClick={() => navigate("/")}
            radius="xs"
            size="lg"
          >
            <IconHome stroke={1.2} size={25} />
          </ActionIcon>
        </Tooltip>
        <Button variant="outline" leftSection={<IconLogout />} onClick={open}>
          Logout
        </Button>
      </Group>
    </nav>
  );
}
