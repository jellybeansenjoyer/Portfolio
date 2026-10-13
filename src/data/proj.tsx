interface ProjectLink {
    label: string,
    url: string
}

export interface ProjectPhotoSection {
    title: string,
    photo: string[]
    /** `contain` keeps full screenshots visible. Default crops to a fixed tile. */
    fit?: 'contain' | 'cover'
}

interface proj {
    id:number,
    title:string,
    description:string,
    date:string,
    photo:string[],
    skills:string[],
    video:string[],
    git:string,
    links?: ProjectLink[],
    /** Optional extra image galleries (e.g. themed sections). Paths are under `public/`. */
    photoSections?: ProjectPhotoSection[]
}

export default proj
