type InputPage = {
  page: number;
}

export const parseInputPage = (value?: string | string[]): InputPage => {
  if (value instanceof Array || !value) return { page: 1 }
  if (/\d+/.test(value) && Number(value) > 0) return { page: Number(value) }

  return {
    page: 1
  }
}
