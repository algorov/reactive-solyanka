import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Container, Button, Box, useColorMode } from '@chakra-ui/react';
import TodoPage from './pages/TodoPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh">
          <Container maxW="container.md" p={4}>
            <nav>
              <Link to="/"><Button mr={4}>Задачи</Button></Link>
              <Link to="/settings"><Button>Настройки</Button></Link>
            </nav>

            <Routes>
              <Route path="/" element={<TodoPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
