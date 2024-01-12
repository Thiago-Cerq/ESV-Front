//import axios from 'axios';
import{ useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'
'use client;'

const schema = yup
  .object({
    pesquisa: yup.string().required("O campo é obrigatório!"),
  }).required()

function List() {
  const { register, handleSubmit ,formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

function onSubmit(userData: any) {
    console.log(userData);
}

console.log(errors);
    
  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>{errors.pesquisa?.message}</span>
        <input {...register('pesquisa', {required: true})} type="text" placeholder="Pesquise por uma informação" />
      </form>

    <table border="0" width="100%" className="tabela">
      <thead>
        <th>Tipo</th>
        <th>UF</th>
        <th>Cidade</th>
        <th>Endereço</th>
      </thead>
      <tbody>
        <td>Exemplo</td>
        <td>DF</td>
        <td>Brasília</td>
        <td>St. Leste Projeção A - Gama Leste, Brasília - DF, 72444-240</td>
      </tbody>
      <tbody>
        <td>Exemplozinho 2</td>
        <td>RJ</td>
        <td>Rio de Janeiro</td>
        <td>Rua Lauro Müller, 116 - Botafogo, Rio de Janeiro - RJ, 22290-160</td>
      </tbody>
      {/* criar um loop aqui após integração */}
    </table>

    </div>
  );
}
  
  export default List