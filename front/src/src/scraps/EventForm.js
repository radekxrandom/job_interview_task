import {Button, Form} from 'antd';
import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';

import {eventsList} from '../state/atoms/eventsList';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const EventForm = (props) => {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
  });
  const setTodoList = useSetRecoilState(eventsList);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        email: inputValue.email,
        date: inputValue.date
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue({
      ...inputValue,
      target:  value
    });
  };
  return (
    <>
      <Card  background="light-1">
  <CardHeader pad="medium">Header</CardHeader>
  <CardBody pad="medium"><Form onSubmit={({ value }) => {}}>
      <FormField name="name" htmlFor="textinput-id" label="Name">
        <TextInput id="textinput-id" name="name" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form></CardBody>
  <CardFooter pad={{horizontal: "small"}} background="light-2">
    <Button
    icon={<Icons.Favorite color="red" />}
    hoverIndicator
    />
    <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
  </CardFooter>
</Card>
    </>
  );
};
export default EventForm;