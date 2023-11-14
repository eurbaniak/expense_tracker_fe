import { Button, Group, Modal } from "@mantine/core";
import { useAuth } from "../../../../utils/AuthContext/AuthContext";

interface LogoutModalProps {
  opened: any;
  close: any;
}

const LogoutModal = ({ opened, close }: LogoutModalProps) => {
  const { logout } = useAuth();
  return (
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
        <Button
          variant="outline"
          color="red"
          onClick={() => {
            logout();
            close();
          }}
        >
          Logout
        </Button>
      </Group>
    </Modal>
  );
};

export default LogoutModal;
