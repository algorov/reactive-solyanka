import React, { useState } from 'react';
import { Box, Input, Button, List, ListItem, Checkbox, Heading, Stack } from '@chakra-ui/react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <Box mt={5}>
      <Heading mb={4}>Менеджер задач</Heading>
      <Stack direction="row" mb={4}>
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Добавить новую задачу"
        />
        <Button onClick={handleAddTodo} colorScheme="blue">
          Добавить
        </Button>
      </Stack>

      <Stack direction="row" mb={4}>
        <Button onClick={() => setFilter('all')} colorScheme={filter === 'all' ? 'blue' : 'gray'}>
          Все
        </Button>
        <Button onClick={() => setFilter('completed')} colorScheme={filter === 'completed' ? 'blue' : 'gray'}>
          Выполненные
        </Button>
        <Button onClick={() => setFilter('incomplete')} colorScheme={filter === 'incomplete' ? 'blue' : 'gray'}>
          Невыполненные
        </Button>
      </Stack>

      <List spacing={3}>
        {filteredTodos.map(todo => (
          <ListItem key={todo.id} d="flex" justifyContent="space-between">
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(todo.id)}>
              {todo.text}
            </Checkbox>
            <Button colorScheme="red" size="sm" onClick={() => handleDeleteTodo(todo.id)}>
              Удалить
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoPage;

