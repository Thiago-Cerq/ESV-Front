//import axios from 'axios';
import{ useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'

import FilterImage from './assets/filter.png'

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

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>{errors.pesquisa?.message}</span>
          <input {...register('pesquisa', {required: true})} type="text" placeholder="Pesquise por uma informação" 
          className='pesquisa'/>
        </form>
        <img src={FilterImage} className="filtragem"/>

        <div className="dropdown-filter">
          <h4>Filtro</h4>
          <hr />
          <label>UF</label>
          <select>
            <option value="">AC</option> <option value="">AL</option> <option value="">AP</option> <option value="">AM</option>
            <option value="">BA</option> <option value="">CE</option> <option value="">DF</option> <option value="">ES</option>
            <option value="">GO</option> <option value="">MA</option> <option value="">MT</option> <option value="">MS</option>
            <option value="">MG</option> <option value="">PA</option> <option value="">PB</option> <option value="">PR</option>
            <option value="">PE</option> <option value="">PI</option> <option value="">RJ</option> <option value="">RN</option>
            <option value="">RS</option> <option value="">RO</option> <option value="">RR</option> <option value="">SC</option>
            <option value="">SP</option> <option value="">SE</option> <option value="">TO</option>
          </select>
        </div>
      </div>

    

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