const values = [ 0, 1, 2 ] as const
type Values = typeof values

console.info(values)