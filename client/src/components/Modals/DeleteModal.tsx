import { Box, Button } from '@chakra-ui/react';
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
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import { useTasks } from '../../contexts/TaskProvider';
import { toaster } from '../ui/toaster';

const DeleteModal = ({ taskId }: { taskId: string }) => {
  const [open, setOpen] = useState(false);
  const { deleteTask } = useTasks();

  const handleSubmit = () => {
    deleteTask(taskId);
    setOpen(false);
    toaster.create({
      type: 'success',
      description: 'Task deleted successfully',
    });
  };

  return (
    <DialogRoot
      open={open}
      role="alertdialog"
      onOpenChange={(e) => setOpen(e.open)}
      placement={'center'}
    >
      <DialogTrigger asChild>
        <Box
          _hover={{ transform: 'scale(1.1)' }}
          cursor={'pointer'}
          title="Delete"
        >
          <MdDelete size={'25px'} />
        </Box>
      </DialogTrigger>
      <DialogContent
        rounded={'10px'}
        bg={'#1a1a1a'}
      >
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action cannot be undone. This will permanently delete your
            Task.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button
            colorPalette="red"
            onClick={handleSubmit}
          >
            Delete
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default DeleteModal;
