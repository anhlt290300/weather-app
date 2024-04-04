const formatString = (string) => {
  return string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f\s]/g, '')
}

export { formatString }
