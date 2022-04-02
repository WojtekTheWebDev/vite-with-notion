import { useNotion } from '../../composables/useNotion'

const { getPage } = useNotion();

export type Page = Awaited<ReturnType<typeof getPage>>