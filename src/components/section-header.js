/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, subheading, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {title}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.Title',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {subheading}
      </Heading>
    </Box>
  );
}
