import React from 'react';
import _ from 'lodash';
import { Flex, Box } from '../dist';

const styles = {
    box: {
        backgroundColor: '#cd6a51'
    },
    title: {
        fontSize: 18
    },
    container: {
        backgroundColor: 'rgba(156,39,176,0.2)'
    }
};

const renderBoxes = (column, reverse) =>
    _.times(3, index =>
        (<Box
            key={index}
            style={styles.box}
            p={1}
            ml={index > 0 && !column && !reverse ? 1 : 0}
            mr={index > 0 && !column && reverse ? 1 : 0}
            mt={index > 0 && column && !reverse ? 1 : 0}
            mb={index > 0 && column && reverse ? 1 : 0}
        >
            {index}
         </Box>),
    );

const App = () =>
    (<Flex column>
        <Box style={styles.title}>Flex direction</Box>
        <Flex
            align="center"
        >
            Row (default)
            <Flex
                style={styles.container}
                p={1}
            >
                {renderBoxes()}
            </Flex>
            Column
            <Flex
                style={styles.container}
                p={1}
                column
            >
                {renderBoxes(true)}
            </Flex>
            Row reverse
            <Flex
                style={styles.container}
                p={1}
                reverse
            >
                {renderBoxes(false, true)}
            </Flex>
            Column
            <Flex
                style={styles.container}
                p={1}
                column
                reverse
            >
                {renderBoxes(true, true)}
            </Flex>
        </Flex>
        <Box style={styles.title}>Align items</Box>
        <Flex
            align="center"
        >
            {'Row - justify="flex-start" (default)'}
            <Flex
                style={{ ...styles.container, width: 200 }}
                justify="flex-start"
                p={1}
            >
                {renderBoxes()}
            </Flex>
            {'Row - justify="flex-end"'}
            <Flex
                style={{ ...styles.container, width: 200 }}
                justify="flex-end"
                p={1}
            >
                {renderBoxes()}
            </Flex>
        </Flex>
     </Flex>);

export default App;
