// src/components/Note.test.tsx
import { render, screen } from '@testing-library/react';
import Note from './Note';
import { Note as NoteType } from '../types';

const note: NoteType = {
  id: '1',
  title: 'Test Note',
  content: 'This is a test note.',
  tags: ['test'],
  createdAt: new Date(),
  updatedAt: new Date(),
};

test('renders note component', () => {
  render(<Note note={note} />);
  const titleElement = screen.getByText(/Test Note/i);
  expect(titleElement).toBeInTheDocument();
});
