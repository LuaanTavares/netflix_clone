

const API_BASE = 'https://viacep.com.br/ws/'

const getEndereco = async (cep) => {
  const req = await fetch (`${API_BASE} ${cep}${'/json/'}`)
  const json = req.json()
  return json
 }

export default function CEP(cepTela){
  
return(
  getEndereco(cepTela)

)
}