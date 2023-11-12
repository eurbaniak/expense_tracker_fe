import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./login.module.css";
import { useState } from "react";
import { useAuth } from "../../utils/AuthContext";

interface loginDataT {
  email: string;
  password: string;
}

export function Login() {
  const { login, error, loading } = useAuth();
  const [formData, setFormData] = useState<loginDataT>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Expense Tracker
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleFormSubmit}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button type="submit" fullWidth mt="xl" loading={loading}>
            Sign in
          </Button>
          {error && (
            <Text c="red" mt="md" ta="center">
              {error.message}
            </Text>
          )}
        </form>
      </Paper>
    </Container>
  );
}
