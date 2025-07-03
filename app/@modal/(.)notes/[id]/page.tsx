
import Modal from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";

type Props = {
    params: Promise<{id: string}>;
}

const NotePreview = async ({params}: Props) => {
  const {id} = await params;
  const idk = Number(id)
  const note = await fetchNoteById(idk);


  return (
    <>
    <Modal>
    <h2>{note.title}</h2>
    <p>{note.content}</p>
    </Modal>
    </>
  )
}

export default NotePreview;