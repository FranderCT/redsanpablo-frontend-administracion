// ./Table/AddUserModal.tsx
import { Modal } from 'react-responsive-modal';
import { useForm } from '@tanstack/react-form';
import { useCreateUser } from '../../../../Auth/Hooks/AuthHooks';
import { RegisterUserInitialState } from '../../../../Auth/Models/RegisterUser';

type MyModalProps = {
  open: boolean;
  onClose: () => void;
};

const AddUserModal = ({ open, onClose }: MyModalProps) => {
  const createUserMutation = useCreateUser();

  const form = useForm({
    defaultValues: RegisterUserInitialState,
    // validators: { onChange: RegisterSchema },
    onSubmit: async ({ value }) => {
      if (value.Password !== value.ConfirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      const { IsAbonado, ...userData } = value;
      try {
        await createUserMutation.mutateAsync(userData);
        form.reset();
        onClose();
      } catch {
        form.reset();
      }
    },
  });

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      blockScroll
      focusTrapped
      showCloseIcon={false}
      classNames={{
        root: "z-[10000]",
        overlay: "bg-black/50",
        modal: "rounded-2xl p-0 shadow-2xl w-[95vw] max-w-[1000px] ring-1 ring-gray-200",
      }}
      styles={{ modal: { padding: 0 } }}
    >
      
    </Modal>
  );
};

export default AddUserModal;
