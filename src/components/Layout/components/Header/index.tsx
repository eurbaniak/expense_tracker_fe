import { Group, Burger, Container, Text, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.scss";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

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
            <a
              href="/"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              About
            </a>
          </Group>
          <Group gap={5} visibleFrom="sm">
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
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
