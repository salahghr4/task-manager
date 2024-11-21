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
import { Box, Button, Input, Stack, Textarea } from '@chakra-ui/react';

import { Checkbox } from '@/components/ui/checkbox';
import { Field } from '@/components/ui/field';
import { useState } from 'react';
import { MdEdit, MdEditDocument } from 'react-icons/md';
import { useTasks } from '../../contexts/TaskProvider';
import { taskInputs, TaskType } from '../../types/types';

const EditModal = ({ taskId, task }: { taskId: string; task: TaskType }) => {
  const [taskData, setTaskData] = useState<taskInputs>({
    description: task.description,
    title: task.title,
    completed: task.completed,
    important: task.important,
  });

  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const { editTask } = useTasks();

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
      editTask(taskId, taskData);
      setError(false);
      setOpen(false);
    } else setError(true);
  };
  return (
    <DialogRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Box
          _hover={{ transform: 'scale(1.1)' }}
          cursor={'pointer'}
          title="Edit"
        >
          <MdEditDocument size={'25px'} />
        </Box>
      </DialogTrigger>
      <DialogContent
        rounded={'10px'}
        bg={'#1a1a1a'}
      >
        <DialogHeader>
          <DialogTitle fontSize={'1.4rem'}>Edit Task</DialogTitle>
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
            <Checkbox
              checked={taskData.completed}
              onChange={() =>
                setTaskData({ ...taskData, completed: !taskData.completed })
              }
            >
              Completed
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
            <MdEdit />
            Edit task
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default EditModal;
