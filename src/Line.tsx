import axios from 'axios';
import{ useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'

import {useState, useEffect, useRef} from 'react';

import FilterImage1 from './assets/filter1.png'
import TrashImage from './assets/trash.png'
import EditImage from './assets/edit.png'

'use client;'





function Line({id}: {id: string}) {

    function iterador(data: any) {
        for (var i = 0; i < data.length; i++) {
          console.log(data[i].id);
        }
    }

    function iterador2(data: any) {
        for (var i = 0; i < data.length; i++) {
          console.log("Iterador 2");
          console.log(data[i]);
        }
    }

    console.log(id)

// USESTATE E USEEFFECT PARA FILTRO

    const [info, setInfo] = useState<any[]>([]);

    const getInfo = () => {
        axios.get(`http://localhost:8080/suas/v1/equipamentos/municipio/2111300/tipo/CRAT/`)	
        .then((response) => {
        console.log(response.data.content)
        setInfo(response.data.content)
        console.log("A requisição foi um sucesso!")

        })
        .catch(() => {
        console.log("Deu errado!")
        })
    }

        console.log();

  


    useEffect(() => {
        getInfo()
        const indice = iterador(info)
        iterador2(info)
    },[]) 
    


  return (

    <div>
       
        <tbody>
            <td>Exemplo</td>
            <td>DF</td>
            <td>Brasília</td>
            <td>St. Leste Projeção A - Gama Leste, Brasília - DF, 72444-240</td>
            <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button>
            <button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
        </tbody>
        <tbody>
            <td>Exemplo</td>
            <td>DF</td>
            <td>Brasília</td>
            <td>St. Leste Projeção A - Gama Leste, Brasília - DF, 72444-240</td>
            <td><button type="submit" className='action-button'> <img src={EditImage} className="action-image"/> </button>
            <button type="submit" className='action-button'> <img src={TrashImage} className="action-image"/> </button></td>
            <section>


            {info.map((infoAbrigamento, key) => 
            
                <p key={key}>{infoAbrigamento.nome}</p>
                
            )}
               
            </section>
        </tbody>
        {/* criar um loop aqui após integração */}
        
        
    </div>
  );
}





  export default Line;