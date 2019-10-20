import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const FilterExpensesContainer = styled.div`
  font-size: 12px;
  background: rgba(255, 102, 0, 0.686);
  border: gray 1px solid;
  border-bottom: none;
  padding: 5px;
`
const FilterTitle = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`
const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const FilterLabel = styled.label`
  margin-bottom: 10px;
`
const FilterInput = styled.input`
  font-size: 10px;
  max-width: 20vw;
  padding: 0;
  margin-bottom: 10px;
`

const FilterExpenses = (props) => {

  const FilterExpensesMaxValue = (event) => {
    const value = Number(event.target.value)

    const newFilterValue = {
      'maxValue': value,
    }

    props.onFilterChange(newFilterValue)
  }

    const filterExpensesMinValue = (event) => {
      const value = Number(event.target.value)

        const newFilterValue = {
          'minValue': value,
        }
      props.onFilterChange(newFilterValue)
    }

  return (
    <FilterExpensesContainer>
      <FilterTitle>Filtrar Despesas</FilterTitle>
      <FilterWrap>
        <FilterLabel htmlFor="minValue">Valor Mínimo:</FilterLabel>
        <FilterInput
        id="minValue"
        name="minValue"
        type="number"
        placeholder="Valor Mínimo"
        min={0}
        onChange={filterExpensesMinValue}
        />
      </FilterWrap>
      <FilterWrap>
        <FilterLabel htmlFor="maxValue">Valor Máximo:</FilterLabel>
        <FilterInput
        id="maxValue"
        name="maxValue"
        type="number"
        placeholder="Valor Máximo"
        min = {0}
        onChange={FilterExpensesMaxValue}
        />
      </FilterWrap>
    </FilterExpensesContainer>
  );
}




export default FilterExpenses;







