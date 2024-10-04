import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';

const SettingsPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();  // Хук для переключения тем

  return (
    <Box>
      <h1>Настройки</h1>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Включить ночной режим' : 'Включить дневной режим'}
      </Button>
    </Box>
  );
};

export default SettingsPage;