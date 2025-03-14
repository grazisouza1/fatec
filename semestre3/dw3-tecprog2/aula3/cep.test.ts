import verificaCep from "./cep";
import { expect, test } from "@jest/globals"

test("CEP Válido - 12345678", () => {
    expect(verificaCep("12345678")).toBe(true)
})

test("CEP Válido 12345-678", () => {
    expect(verificaCep("12345-678")).toBe(true)
})

test("CEP Inválido 1234567", () => {
    expect(verificaCep("1234567")).toBe(false)
})

test("CEP Inválido 1234567890", () => {
    expect(verificaCep("1234567890")).toBe(false)
})