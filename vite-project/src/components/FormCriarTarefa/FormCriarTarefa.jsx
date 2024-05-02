import { useState } from 'react';

import { Botao, CampoTexto, Loading } from '../../components';
import { useAppContext } from '../../hooks';

import style from './FormCriarTarefa.module.css';

import { IoAddCircle } from "react-icons/io5";


const FormCriarTarefa = () => {
  const { adicionarTarefa, loadingAdicionarTarefa } = useAppContext();

  const [nomeTarefa, setNomeTarefa] = useState('');

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const onSubmitFormCriarTarefa = (event) => {
    event.preventDefault();

    if(!nomeTarefa) {
      return;
    }

    adicionarTarefa(nomeTarefa);

    setNomeTarefa('');
  };

  return (
    <form className={style.FormCriarTarefa} onSubmit={onSubmitFormCriarTarefa}>
      <CampoTexto 
        value={nomeTarefa} 
        onChange={onChangeNomeTarefa} 
      />
      <Botao texto={loadingAdicionarTarefa ? <Loading /> : <IoAddCircle size={16} />
} /> 
    </form>
  );
};

export { FormCriarTarefa };