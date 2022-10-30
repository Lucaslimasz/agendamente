export const formatDate = (date) => {
  return Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short' }).format(new Date(String(date).split('-')))
}