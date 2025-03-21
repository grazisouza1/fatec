import subtrai from '.'
import{ expect, test } from '@jest/globals'

const a = Math.floor(Math.random() * 100)
const b = Math.floor(Math.random() * 100)

test(`Subtrai ${a} - ${b} é igual a ${a - b}`, () => {
    expect(subtrai(a, b)).toBe(a - b)
})