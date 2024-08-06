// src/types.ts
export type Note = {
    id: string;
    title: string;
    content: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type AppState = {
    notes: Note[];
    filters: string[];
  };
  