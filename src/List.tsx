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
          <input {...register('pesquisa', {required: true})} type="text" placeholder="Pesquise por palavra-chave" 
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
              <DropdownItem title = {"Tipo"} option = {"Restaurante"}/>
              <DropdownItem title = {"UF"} option = {"AC"}/>
            </ul>
            <button type="submit" className='filter-button'> Buscar </button>
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
        <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button></td>
        <td><button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
      </tbody>
      <tbody>
        <td>Exemplozinho 2</td>
        <td>RJ</td>
        <td>Rio de Janeiro</td>
        <td>Rua Lauro Müller, 116 - Botafogo, Rio de Janeiro - RJ, 22290-160</td>
        <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button></td>
        <td><button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
      </tbody>
      <tbody>
        <td>Mega Ultra Exemplo 3</td>
        <td>SP</td>
        <td>São Paulo</td>
        <td>R. da Reitoria, R. Cidade Universitária, 374 - Butantã, São Paulo - SP, 05508-220</td>
        <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button></td>
        <td><button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
      </tbody>
      <tbody>
        <td>GIGANTESCO EXEMPLO EXEMPLAR 4</td>
        <td>SC</td>
        <td>Florianópolis</td>
        <td>Eng. Agronômico Andrei Cristian Ferreira, s/n - Trindade, Florianópolis - SC, 88040-900</td>
        <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button></td>
        <td><button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
      </tbody>
      <tbody>
        <td>Exemplo 5</td>
        <td>BA</td>
        <td>Salvador</td>
        <td>Av. Milton Santos, s/nº - Ondina, Salvador - BA, 40170-110</td>
        <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button></td>
        <td><button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
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