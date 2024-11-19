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
import { toaster } from '@/components/ui/toaster';
import { taskInputs } from '../../types/types';

const AddModal = () => {
  const emptyTask: taskInputs = {
    title: '',
    description: '',
    completed: false,
    important: false,
  };

  const [taskData, setTaskData] = useState<taskInputs>(emptyTask);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const { createTask } = useTasks();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskData({ ...taskData, title: e.target.value });
    if (e.target.value) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = () => {
    if (taskData.title) {
      createTask(taskData);
      setError(false);
      setOpen(false);
      setTaskData(emptyTask)
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
                value={taskData.title}
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
                value={taskData.description}
                onChange={(e) =>
                  setTaskData({ ...taskData, description: e.target.value })
                }
              />
            </Field>
            <Checkbox
              checked={taskData.important}
              onChange={() =>
                setTaskData({ ...taskData, important: !taskData.important })
              }
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
