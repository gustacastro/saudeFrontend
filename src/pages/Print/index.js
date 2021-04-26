/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, useField } from '@rocketseat/unform';

import ReactDatepicker, { registerLocale } from 'react-datepicker';
import el from 'date-fns/locale/pt-BR'; // register it with the name you want

import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';
// the locale you want
registerLocale('pt-BR', el);

function disableWeekends(date) {
  return (
    date.getDay() === 1 ||
    date.getDay() === 2 ||
    date.getDay() === 3 ||
    date.getDay() === 4 ||
    date.getDay() === 5
  );
}

export default function Print() {
  function handleSubmit({
    name,
    amount,
    message,
    date_delivery,
    docs_print_id,
  }) {
    console.log({ name, amount, message, date_delivery, docs_print_id });
  }

  const Datepicker = ({ name, label }) => {
    const ref = useRef(null); // for ref manipulation purposes
    const { fieldName, registerField, error } = useField(name); // the name of the prop in form object is used here
    // the state of our datepicker component

    useEffect(() => {
      registerField({
        // here, we're registering the field in the whole form
        name: fieldName,
        ref: ref.current,
        path: 'props.selected', // this is the path to selected date in ReactDatepicker (wich is the selected prop)
        clearValue: (pickerRef) => {
          // for reset purposes
          pickerRef.clear();
        },
      });
    }, [fieldName]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
      <>
        {/* the label is like label in Unform Input component */}
        {!!label && <label htmlFor="datepicker">{label}</label>}
        <ReactDatepicker
          id="birthday"
          name={fieldName}
          locale="pt-BR"
          dateFormat="dd/MM/yyyy"
          inline
          minDate={new Date()}
          filterDate={disableWeekends}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          ref={ref}
        />
        {/* the error is like error in Unform Input component */}
        {error && <span>{error}</span>}
      </>
    );
  };

  return (
    <Container>
      <h1>Imprimir colorido</h1>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <div className="hori">
          <div className="div">
            <span>Nome de quem irá retirar</span>
            <Input name="name" type="text" />
            <span>Quantidade</span>
            <Input name="amount" type="text" />
            <span>Deseja mandar alguma mensagem?</span>
            <Input multiline name="message" cols="40" rows="10" />
          </div>
          <div className="div">
            <div>
              <span>Data de retirada</span>
              <Datepicker name="date_delivery" />
            </div>
            <div className="right">
              <span className="span">Selecionar o arquivo</span>
              <Input className="file" name="docs_print_id" type="file" />
            </div>
          </div>
        </div>
        <button className="button" type="submit">
          Enviar
        </button>
      </Form>
    </Container>
  );
}
