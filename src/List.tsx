//import axios from 'axios';
import{ useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'

import React, {useState, useEffect, useRef} from 'react';

import FilterImage from './assets/filter.png'
import FilterImage1 from './assets/filter1.png'

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
          <input {...register('pesquisa', {required: true})} type="text" placeholder="Pesquise por palavra-chave" 
          className='pesquisa'/>
        </form>

        <div ref={filterRef}>
        <div className='filter-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={FilterImage1} className="filtragem" id="changeimg"/>
        </div>
        
          <div className={`dropdown-filter ${open? "active" : "inactive"}`}>
            <h3>Filtro</h3>
            <hr />
            <ul>
              <DropdownItem title = {"Tipo"} option = {"Restaurante"}/>
              <DropdownItem title = {"UF"} option = {"AC"}/>
            </ul>
          </div>
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

function DropdownItem(props: {title: string, option: string}){
  return(
    <li className='dropdownItem'>
      <label> {props.title} </label>
      <select>
        <option> {props.option} </option>
      </select>
    </li>
  );
}



  export default List