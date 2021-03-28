export const CurrencyTemplate = (value: number) => {
  // origen, style {msd can be ommiter}
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
