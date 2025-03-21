// import soma from './index'
// import sub from './index'
// import multi from './index'
// import div from './index'

import { soma, sub, multi, div } from '.'

import { expect, test } from '@jest/globals'

test('Soma 1 + 2 é igual a 3', () => {
    expect(soma(1,2)).toBe(3)
})

test('Soma 2 + 3 é igual a 5', () => {
    expect(soma(2,3)).toBe(5)
})

test('Subtração 3 - 2 é igual a 1', () => {
    expect(sub(3,2)).toBe(1)
})

test('Multiplicação 5 * 10 é igual a 50', () => {
    expect(multi(5,10)).toBe(50)
})

test('Divisão 20 / 2 é igual a 10', () => {
    expect(div(20,2)).toBe(10)
})