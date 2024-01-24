import{ useForm } from 'react-hook-form';
import FormLogo from './assets/banner.png'
//import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router';
import './Navbar.css'
'use client;'


  const schema = yup
    .object({
      UF: yup.string().required("O campo é obrigatório!"), 
      cidade: yup.string().required("O campo é obrigatório!"), 
      endereco: yup.string().required("O campo é obrigatório!"),
      cep: yup.string().matches(/\d{5}-\d{3}/, "O CEP não está no formato padrão").required("O campo é obrigatório!"),
      tipo: yup.string().required("O campo é obrigatório!"),
      nomeLocal: yup.string().required("O campo é obrigatório!"),
      telefone: yup.string().matches(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/, "O celular não está no formato padrão (XX) 9XXXX-XXXX"),
      whatsapp: yup.string().matches(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/, "O celular não está no formato padrão (XX) 9XXXX-XXXX"),
      site: yup.string(),
      facebook: yup.string(),
      instagram: yup.string(),
      twitter: yup.string(),
      email: yup.string().email("Digite um email valido!"),
      seg: yup.string(), 
      ter: yup.string(),
      qua: yup.string(),
      qui: yup.string(),
      sex: yup.string(),
      sab: yup.string(),
      dom: yup.string(),
      observacao: yup.string(),
  
    }).required()
  
  function Post() {
  
    let navigate = useNavigate();
  
    const { register, handleSubmit ,formState: {errors} } = useForm({
      resolver: yupResolver(schema),
    });
  
  function onSubmit(userData: any) {
      console.log(userData);
      navigate('/')
  }
  
  console.log(errors);
  
  /* Conectar com o backend
  const onSubmit = data => axios.post('http://127.0.0.1:8080/suas/v1/tipos/', data)
    .then(() => {
      console.error("O envio foi um sucesso!");
      history.push('/')
    })
    .catch(() => {
      console.error("O envio falhou!");
    });
    */
  
    return (
      <div className="Post">
        <> 
          <div className="LogoDiv">
            <img className = "Logo" src={FormLogo} />
          </div>   
  
          <h2 className="titlePost">Cadastro de Abrigamento Temporário</h2>
          <div className='formulario'>
            <form id = "formCadastro" onSubmit={handleSubmit(onSubmit)}>
                
                <div className='divEsquerda'>
                  <span>{errors.UF?.message}</span>
                  <input {...register('UF', {required: true})} type="text" placeholder="UF" />
                  
                  <span>{errors.cidade?.message}</span>
                  <input {...register('cidade', {required: true})} type="text" placeholder="Cidade" />
  
                  <span>{errors.endereco?.message}</span>
                  <input {...register('endereco', {required: true})} type="text" placeholder="Endereço" />
  
                  <span>{errors.cep?.message}</span>
                  <input {...register('cep', {required: true})} type="text" placeholder="CEP" />
  
                  <span>{errors.tipo?.message}</span>
                  <input {...register('tipo', {required: true})} type="text" placeholder="Tipo" />
  
                  <span>{errors.nomeLocal?.message}</span>
                  <input {...register('nomeLocal', {required: true})} type="text" placeholder="Nome Do Local" />
  
                  <span>{errors.telefone?.message}</span>
                  <input {...register('telefone', {required: true})} type="text" placeholder="Telefone" />
               </div>
  
               <div className='divCentro'>
                <span>{errors.whatsapp?.message}</span>
                <input {...register('whatsapp', {required: true})} type="text" placeholder="Whats App" />
  
                <span>{errors.site?.message}</span>
                <input {...register('site', {required: true})} type="text" placeholder="Site" />
  
                <span>{errors.facebook?.message}</span>
                <input {...register('facebook', {required: true})} type="text" placeholder="Facebook" />
  
                <span>{errors.instagram?.message}</span>
                <input {...register('instagram', {required: true})} type="text" placeholder="Instagram" />
  
                <span>{errors.twitter?.message}</span>
                <input {...register('twitter', {required: true})} type="text" placeholder="Twitter" />
  
                <span>{errors.email?.message}</span>
                <input {...register('email', {required: true})} type="text" placeholder="E-Mail" />
                
                <span>{errors.seg?.message}</span>
                <input {...register('seg', {required: true})} type="text" placeholder="Segunda" />
              </div>
  
              <div className='divDireita'>
                <span>{errors.ter?.message}</span>
                <input {...register('ter', {required: true})} type="text" placeholder="Terça" />
  
                <span>{errors.qua?.message}</span>
                <input {...register('qua', {required: true})} type="text" placeholder="Quarta" />
  
                <span>{errors.qui?.message}</span>
                <input {...register('qui', {required: true})} type="text" placeholder="Quinta" />
  
                <span>{errors.sex?.message}</span>
                <input {...register('sex', {required: true})} type="text" placeholder="Sexta" />
  
                <span>{errors.sab?.message}</span>
                <input {...register('sab', {required: true})} type="text" placeholder="Sabado" />
  
                <span>{errors.dom?.message}</span>
                <input {...register('dom', {required: true})} type="text" placeholder="Domingo" />
  
                <span>{errors.observacao?.message}</span>
                <input {...register('observacao', {required: true})} type="text" placeholder="Observação" />
              </div>
      
                
            </form>
            <div className="btns-form">
              <button className="btn-form" type="submit" form="formCadastro"> Confirmar </button>
            </div>        
          </div>  
          
         </>
        
      </div>
    )
  }
  
  export default Post
  