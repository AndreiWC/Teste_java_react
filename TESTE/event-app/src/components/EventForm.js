/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: green;
`;

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [institutionId, setInstitutionId] = useState('');
  const [institutions, setInstitutions] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/institutions')
      .then(response => setInstitutions(response.data))
      .catch(error => console.error('Error fetching institutions:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      eventName,
      startDate,
      endDate,
      institution: { id: institutionId }
    };

    axios.post('http://localhost:8080/events', eventData)
      .then(response => {
        setSuccessMessage('Evento criado com sucesso!');
        setEventName('');
        setStartDate('');
        setEndDate('');
        setInstitutionId('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      })
      .catch(error => {
        console.error('Error creating event:', error);
        setSuccessMessage('Erro ao criar evento.');
      });
  };

  return (
    <Container>
      <FormWrapper>
        <FormTitle>Cadastrar Evento</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Nome do Evento:</Label>
            <Input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Data de Início:</Label>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Data de Término:</Label>
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Instituição:</Label>
            <Select value={institutionId} onChange={(e) => setInstitutionId(e.target.value)}>
              <option value="">Selecione</option>
              {institutions.map((institution) => (
                <option key={institution.id} value={institution.id}>
                  {institution.name}
                </option>
              ))}
            </Select>
          </FormField>
          <Button type="submit">Cadastrar Evento</Button>
        </form>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </FormWrapper>
    </Container>
  );
};

export default EventForm;
*/

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: green;
`;

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [institutionId, setInstitutionId] = useState('');
  const [institutions, setInstitutions] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch('/institutions')
      .then(response => response.json())
      .then(data => setInstitutions(data))
      .catch(error => console.error('Error fetching institutions:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      eventName,
      startDate,
      endDate,
      institutionId
    };

    fetch('/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Evento criado:', data);
      setSuccessMessage('Evento criado com sucesso!');
      setEventName('');
      setStartDate('');
      setEndDate('');
      setInstitutionId('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Limpa a mensagem de sucesso após 5 segundos
    })
    .catch(error => console.error('Error creating event:', error));
  };

  return (
    <Container>
      <FormWrapper>
        <FormTitle>Cadastrar Evento</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label>Nome do Evento:</Label>
            <Input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Data de Início:</Label>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Data de Término:</Label>
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </FormField>
          <FormField>
            <Label>Instituição:</Label>
            <Select value={institutionId} onChange={(e) => setInstitutionId(e.target.value)}>
              <option value="">Selecione</option>
              {institutions.map((institution) => (
                <option key={institution.id} value={institution.id}>
                  {institution.name}
                </option>
              ))}
            </Select>
          </FormField>
          <Button type="submit">Cadastrar Evento</Button>
        </form>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </FormWrapper>
    </Container>
  );
};

export default EventForm;
