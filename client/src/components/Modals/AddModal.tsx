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

const AddModal = () => {
  return (
    <DialogRoot
      placement={'center'}
      motionPreset={'slide-in-bottom'}
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
      <DialogContent rounded={'10px'}>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap="4">
            <Field
              label="Title"
              helperText="Max 20 characters."
              required
            >
              <Input
                placeholder="Task title"
                variant="subtle"
                ps={'1.5'}
                required
              />
            </Field>
            <Field
              label="Description"
              helperText="Max 300 characters."
            >
              <Textarea
                placeholder="Description"
                variant="subtle"
                ps={'1.5'}
                resize="none"
                rows={5}
              />
            </Field>
            <Checkbox>Important</Checkbox>
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogActionTrigger>
          <Button>
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
