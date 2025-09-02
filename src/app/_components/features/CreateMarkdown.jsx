'use client'

import React from "react";
import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/react";

export default function MarkdownRenderer({ content }) {
  return (
    <Box className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </Box>
  );
}
