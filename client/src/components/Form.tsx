import { Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button"

const Form = () => {
  return (
    <Fieldset.Root
      size="lg"
      maxW="lg"
      h={"min-content"}
      p={"3rem"}
      bg={"#1d1d1d"}
      rounded="2xl"
      borderWidth={".5px"}
      borderColor={"#737373"}
    >
      <Stack>
        <Fieldset.Legend color={"white"}>Add task</Fieldset.Legend>
      </Stack>

      <Fieldset.Content>
        <Field label="Name" required>
          <Input name="name" />
        </Field>
      </Fieldset.Content>

      <Button
        type="submit"
        w={"100%"}
        variant="subtle"
      >
        Submit
      </Button>
    </Fieldset.Root>
  );
};

export default Form;
