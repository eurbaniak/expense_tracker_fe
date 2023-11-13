import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck, IconBrandGithubFilled } from "@tabler/icons-react";
import image from "../../assets/savings.svg";
import classes from "./main.module.css";
import { Header } from "../Layout/components/Header";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Expense Guardian <br /> Empowering Your{" "}
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "teal", to: "cyan" }}
                inherit
                fw={700}
              >
                Financial
              </Text>{" "}
              Journey
            </Title>
            <Text c="dimmed" mt="md">
              Welcome to Expense Guardian, your trusted companion on the path to
              financial wellness! Take control of your expenses with our
              intuitive and powerful expense tracking application. Whether
              you're a budgeting novice or a financial guru, Expense Guardian is
              designed to simplify the way you manage your finances.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Streamlined Expense Tracking:</b> – Effortlessly record and
                categorize your expenses on the go. Our user-friendly interface
                makes it easy to stay on top of your spending.
              </List.Item>
              <List.Item>
                <b>Smart Budgeting</b> – Set personalized budgets and savings
                goals. Expense Guardian provides real-time insights into your
                financial health, helping you make informed decisions to achieve
                your financial milestones.
              </List.Item>
            </List>
            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                variant="gradient"
                gradient={{ from: "teal", to: "cyan" }}
                onClick={() => navigate("/login")}
              >
                Get started
              </Button>
              <a href="https://github.com/eurbaniak/expense_tracker_fe">
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  type="button"
                  className={classes.control}
                  leftSection={<IconBrandGithubFilled />}
                >
                  Github
                </Button>
              </a>
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </>
  );
}
