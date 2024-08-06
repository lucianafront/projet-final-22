// src/components/Note.tsx
import React from 'react';
import { Note as NoteType } from '../types';

const Note: React.FC<{ note: NoteType }> = ({ note }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>{note.createdAt.toLocaleDateString()}</small>
    </div>
  );
};

export default Note;
