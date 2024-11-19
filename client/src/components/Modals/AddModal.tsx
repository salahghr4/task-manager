import { Box, Button, Input, Stack, Textarea } from '@chakra-ui/react';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CiCirclePlus } from 'react-icons/ci';
import { Field } from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import { LuPlus } from 'react-icons/lu';
import { useState } from 'react';
import { useTasks } from '../../contexts/TaskProvider';
import { useModals } from '../../contexts/ModalProvider';
import { toaster } from '@/components/ui/toaster';

const AddModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [error, setError] = useState(false);

  const { open, setOpen, closeModal } = useModals();

  const { createTask } = useTasks();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const emptyInputs = () => {
    setTitle('');
    setDescription('');
    setIsImportant(false);
  };

  const handleSubmit = () => {
    if (title) {
      createTask(title, description, isImportant);
      setError(false);
      closeModal();
      emptyInputs();
      toaster.create({
        title: `Task created successfully`,
        type: 'success',
      });
    } else setError(true);
  };
  return (
    <DialogRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Box
          cursor={'pointer'}
          transition={'.3s'}
          _hover={{ transform: 'scale(1.06)' }}
        >
          <CiCirclePlus
            size={'50px'}
            color="#6a6a6a"
          />
        </Box>
      </DialogTrigger>
      <DialogContent
        rounded={'10px'}
        bg={'#1a1a1a'}
      >
        <DialogHeader>
          <DialogTitle fontSize={'1.4rem'}>Add Task</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap="4">
            <Field
              label="Title"
              helperText="Max 20 characters."
              required
              invalid={error}
              errorText="This field is required"
            >
              <Input
                placeholder="Task title"
                ps={'1.5'}
                required
                value={title}
                onChange={handleTitleChange}
              />
            </Field>
            <Field
              label="Description"
              helperText="Max 300 characters."
            >
              <Textarea
                placeholder="Description"
                ps={'1.5'}
                resize="none"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Field>
            <Checkbox
              checked={isImportant}
              onChange={() => setIsImportant(!isImportant)}
            >
              Important
            </Checkbox>
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant={'subtle'}>Cancel</Button>
          </DialogActionTrigger>
          <Button
            onClick={handleSubmit}
            disabled={error}
          >
            <LuPlus />
            Create task
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default AddModal;
