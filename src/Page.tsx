import{ useForm } from 'react-hook-form';
import FormLogo from './assets/banner.png'
//import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './Navbar.css'
'use client;'

const schema = yup
  .object({
    name: yup.string().required("O campo é obrigatório!"),
    email: yup.string().email("Digite um email valido!").required("O campo é obrigatório!"),
    password: yup.string().min(8, "A senha deve ter pelo menos 6 digitos").required("O campo é obrigatório!"),
    confirmPassword: yup.string().required("O campo é obrigatório!").oneOf([yup.ref("password")], "As senhas devem ser iguais!"),
   
  }).required()


function Form() {
    const { register, handleSubmit ,formState: {errors} } = useForm({
        resolver: yupResolver(schema),
      });

    function onSubmit(userData: any) {
        console.log(userData);
    }

    console.log(errors);

    /* Conectar com o backend
    const onSubmit = data => axios.post('http://localhost:3001/users', data)
      .then(() => {
        console.error("O envio foi um sucesso!");
      })
      .catch(() => {
        console.error("O envio falhou!");
      });
      */

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h2>Cadastro de Abrigamento Temporário</h2>

            <img src={FormLogo} />

            <span>{errors.name?.message}</span>
            <input {...register('name', {required: true})} type="text" placeholder="Nome" />
           
            <span>{errors.email?.message}</span>
            <input {...register('email')} type="text" placeholder="Email" />
            
            <span>{errors.password?.message}</span>
            <input {...register('password')} type="password" placeholder="Senha" />
            
            <span>{errors.confirmPassword?.message}</span>
            <input {...register('confirmPassword')} type="password" placeholder="Confirmar senha" />
            

            <button type="submit"> Confirmar </button>
        </form>
    );
}

export default Form;