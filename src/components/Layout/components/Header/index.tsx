import {
  Group,
  Container,
  Text,
  Button,
  Divider,
  Tooltip,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../utils/AuthContext/AuthContext";
import { useGetCurrentUser } from "../../../../api/queries";
import { IconLogout } from "@tabler/icons-react";
import LogoutModal from "../LogoutModal";

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const { data } = useGetCurrentUser();
  const userEmail = data?.currentUser.email;

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "teal", to: "cyan" }}
            inherit
            fw={700}
          >
            Expense Guardian
          </Text>
          <Group gap={5} visibleFrom="sm">
            {!authenticated && (
              <>
                <Button
                  variant="filled"
                  radius={10}
                  onClick={() => navigate("/login")}
                  size="md"
                >
                  Login
                </Button>
                <Button
                  variant="subtle"
                  radius={10}
                  onClick={() => navigate("/register")}
                  size="md"
                >
                  Sign Up
                </Button>
              </>
            )}
            {authenticated && (
              <>
                <Text>{userEmail}</Text>
                <Divider orientation="vertical" m={10} size={3} />
                <Button
                  variant="light"
                  radius={10}
                  onClick={() => navigate("/dashboard")}
                  size="md"
                >
                  Go to Dashboard
                </Button>
                <Tooltip label="Logout">
                  <ActionIcon
                    ml={5}
                    variant="light"
                    color="red"
                    radius={10}
                    onClick={open}
                    size={42}
                  >
                    <IconLogout stroke={1.2} size={25} />
                  </ActionIcon>
                </Tooltip>
              </>
            )}
          </Group>
        </div>
        <LogoutModal opened={opened} close={close} />
      </Container>
    </header>
  );
}
