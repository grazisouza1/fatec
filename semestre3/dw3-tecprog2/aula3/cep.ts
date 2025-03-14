export default function verificaCep(cep: String): boolean {
    const cepLimpo = cep.replace("-", "") //cep.replae(/\D/g, "") ==> Regex. Nesse caso, qualquer caractere diferente colocado vai ser substituído por ""(vazio)
    if (cep.length < 8){
        return false
    }

    return true
}