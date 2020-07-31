import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;

    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    clearForm,
  };
}

export default useForm;
