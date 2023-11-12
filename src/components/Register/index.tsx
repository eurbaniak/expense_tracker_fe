import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useAuth } from "../../utils/AuthContext";

interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export function Register() {
  const navigate = useNavigate();
  const { register, registerError: error } = useAuth();

  const form = useForm<RegisterData>({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          <h1 className={classes.title}>
            {" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "teal", to: "cyan" }}
              inherit
            >
              Expense Guardian
            </Text>{" "}
          </h1>
          Register Account
        </Title>
        <form
          onSubmit={form.onSubmit(
            async (values: RegisterData) => await register(values)
          )}
        >
          <TextInput
            label="Email address"
            placeholder="your@email.com"
            size="md"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Username"
            placeholder="Your username"
            size="md"
            mt="md"
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps("password")}
          />
          <Button
            fullWidth
            mt={50}
            size="md"
            gradient={{ from: "teal", to: "cyan" }}
            type="submit"
          >
            Register
          </Button>
          {error && (
            <Text c="red" mt="md" ta="center">
              {error.message}
            </Text>
          )}
        </form>

        <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor<"a"> href="#" fw={700} onClick={() => navigate("/login")}>
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
