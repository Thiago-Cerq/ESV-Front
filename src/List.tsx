//import axios from 'axios';
import{ useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'

import React, {useState, useEffect, useRef} from 'react';

import FilterImage1 from './assets/filter1.png'
import TrashImage from './assets/trash.png'
import EditImage from './assets/edit.png'

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


// USESTATE E USEEFFECT PARA FILTRO
  const [open, setOpen] = useState(false);

  const filterRef = useRef();

  useEffect(() => {
    const handler = (e) =>{
      if(!filterRef.current.contains(e.target)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
});

    
  return (

    <div>

      <div>
        <form>
          <span>{errors.pesquisa?.message}</span>
          <input {...register('pesquisa', {required: false})} type="text" placeholder="Pesquise por palavra-chave" 
          className='pesquisa'/>
        </form>

        <div ref={filterRef}>
        <div className='filter-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={FilterImage1} className="filtragem"/>
        </div>
        
          <div className={`dropdown-filter ${open? "active" : "inactive"}`}>
            <h3>Filtro</h3>
            <hr />
            <ul>
              <DropdownItem title = {"UF"} options = {ufList}/>
            </ul>
            <button type="submit" className='filter-button'> Buscar </button>
          </div>
        </div>
        </div>
    

    <table border="1" width="100%" className="tabela">
      <thead>
        <th>Tipo</th>
        <th>UF</th>
        <th>Cidade</th>
        <th>Endereço</th>
        <th>Ações</th>
      </thead>
      <tbody>
        <td>Exemplo</td>
        <td>DF</td>
        <td>Brasília</td>
        <td>St. Leste Projeção A - Gama Leste, Brasília - DF, 72444-240</td>
        <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button>
        <button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
      </tbody>
      {/* criar um loop aqui após integração */}
    </table>

    </div>
  );
}

function DropdownItem(props: {title: string, options: Array<string>}){
  return(
    <li className='dropdownItem'>
      <label> {props.title} </label>
      <select>{props.options.map(option => <option key={option}>{option}</option>)}</select>
    </li>
  );
}

// const ufList = [
//   {uf: 'AC', state: 'Acre'},
//   {uf: 'AL', state: 'Alagoas'},
//   {uf: 'AP', state: 'Amapá'},
//   {uf: 'AM', state: 'Amazonas'},
//   {uf: 'BA', state: 'Bahia'},
//   {uf: 'CE', state: 'Ceará'},
//   {uf: 'DF', state: 'Distrito Federal'},
//   {uf: 'ES', state: 'Espírito Santo'},
//   {uf: 'GO', state: 'Goiás'},
//   {uf: 'MA', state: 'Maranhão'},
//   {uf: 'MT', state: 'Mato Grosso'},
//   {uf: 'MS', state: 'Mato Grosso do Sul'},
//   {uf: 'MG', state: 'Minas Gerais'},
//   {uf: 'PA', state: 'Pará'},
//   {uf: 'PB', state: 'Paraíba'},
//   {uf: 'PR', state: 'Paraná'},
//   {uf: 'PE', state: 'Pernambuco'},
//   {uf: 'PI', state: 'Piauí'},
//   {uf: 'RJ', state: 'Rio de Janeiro'},
//   {uf: 'RN', state: 'Rio Grande do Norte'},
//   {uf: 'RS', state: 'Rio Grande do Sul'},
//   {uf: 'RO', state: 'Rondônia'},
//   {uf: 'RR', state: 'Roraima'},
//   {uf: 'SC', state: 'Santa Catarina'},
//   {uf: 'SP', state: 'São Paulo'},
//   {uf: 'SE', state: 'Sergipe'},
//   {uf: 'TO', state: 'Tocantins'},
// ]

const ufList = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
  'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]



  export default List