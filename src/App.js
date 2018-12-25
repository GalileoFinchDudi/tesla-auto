import React, { Component } from 'react';
import { Flex, Box } from 'rebass'

class App extends Component {
  render() {
    return (
      <Flex flexWrap='wrap'>
        <Box
          p={3}
          width={1}
          color='magenta'
          bg='black'>
          Flex
        </Box>
        <Box
          p={3}
          width={2 / 3}
          color='white'
          bg='magenta'>
          Box
        </Box>
        <Box
          p={3}
          width={1 / 3}
          color='white'
          bg='magenta'>
          Box
        </Box>
      </Flex>
    );
  }
}

export default App;
