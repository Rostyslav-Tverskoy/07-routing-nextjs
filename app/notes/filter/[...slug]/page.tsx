import { fetchNotes } from "@/lib/api"
import NotesClient from "./Notes.client";

type Props = {
    params: Promise<{slug: string[]}>
}




const Filter = async ( {params} : Props) => {
    const page = 1;
    const search = "";


    const {slug} = await params;
    const queryParams = slug[0] === "all" ? "" : slug[0]
    
    
     const {notes, totalPages} = await fetchNotes({search: queryParams, tag: queryParams})
    
    
    return (<NotesClient
      initialNotes={notes}
      initialPage={page}
      initialSearch={search}
      totalPages={totalPages}
      tag={queryParams}
    />)
}

export default Filter;