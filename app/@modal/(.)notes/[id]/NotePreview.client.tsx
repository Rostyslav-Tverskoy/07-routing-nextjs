"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import styles from "./NotePreview.module.css";

type Props = {
  params: { id: string };
};

const NotePreviewClient = ({ params }: Props) => {
  const id = Number(params.id);
  const { data: note, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <Modal>Loading...</Modal>;
  if (isError || !note) return <Modal>Error loading note</Modal>;

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{note.title}</h2>
          <span className={styles.tag}>{note.tag}</span>
        </div>
        <p className={styles.content}>{note.content}</p>
        <p className={styles.date}>
          {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>
    </Modal>
  );
};

export default NotePreviewClient;