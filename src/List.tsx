import axios from 'axios';
import{ useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'
import './Pag.css'


import {useState, useEffect, useRef} from 'react';

import FilterImage1 from './assets/filter1.png'
import TrashImage from './assets/trash.png'
import EditImage from './assets/edit.png'
import React from 'react';

'use client;'

const schema = yup
  .object({
    pesquisa: yup.string().required("O campo é obrigatório!"),
  }).required()

function List() {

  const [info, setInfo] = useState<any[]>([]);
  const [head, setHead] = useState<any[any]>([]);
  const [pages, setPages] = useState([]);
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);


  const getInfo = () => {
      //Passando porpagina
      //axios.get("http://localhost:8080/suas/v1/equipamentos/municipio/2111300/tipo/CRAT?page=${currentPage}&limit={${limit}}")	
      axios.get("http://localhost:8080/suas/v1/equipamentos/municipio/2111300/tipo/CRAT")	
      .then((response) => {
      setInfo(response.data.content)
      setHead(response.data.page)
      console.log(response.data.page)
      console.log("A requisição foi um sucesso!")

      })
      .catch(() => {
      console.log("Deu errado!")
      })
  }

  const { register ,formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  //function onSubmit(userData: any) {
  //    console.log(userData);
  //}

  function addLine(data: any) {
    return (
      <tbody>
        <tr>
          <td>{data.nome}</td>
          <td>{data.unidadeFederacao}</td>
          <td>{data.nomeMunicipio}</td>
          <td>{data.endereco}</td>
          <td>{data.telefone}</td>
          <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button>
          <button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
        </tr>
      </tbody>
    )
  }

  function interador(data: any) {
    for (var i = 0; i < data.length; i++) {
  
    }
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
    getInfo();
    interador(info);
    const totalPaginas = Math.ceil(head.totalElements / limit);

    const arrayPages = [];
    for(let i = 0; i < totalPaginas; i++){
      arrayPages.push(i);
    }

    setPages(arrayPages);

  },[]) 

    
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
        <th>Nome</th>
        <th>Estado</th>
        <th>Cidade</th>
        <th>Endereço</th>
        <th>Telefone</th>
        <th>Ações</th>
      </thead>
      <>
        {info.map((item, index) => (
          <React.Fragment key={index}>
            {addLine(item)}
          </React.Fragment>
        ))}
      </>
    </table>
    <div className='paginacao'>
          <div className='qtdpages'>
            Quantidada total de dados: {head.totalElements}  
          </div>
            <div className='paginas'>
              Previous
              {pages.map((page, index) => (
                <div key={index}
                  onClick = {()=>setCurrentPage(page)}>{page}
                </div>
              ))}
              Next
            </div>     
    </div>
    <div>
    

    </div>
 
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