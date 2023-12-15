import styled from 'styled-components'

export const AppointButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3rem 0rem;
`

export const Table = styled.table`
  width: 100%;
  border: 4px solid #d0effb;
  border-collapse: collapse;
`

export const Attributes = styled.th`
  background-color: #d0effb;
  border-collapse: collapse;
  padding: 0.7rem 0.7rem;
`

export const Values = styled.td`
  text-align: center;
  padding: 1rem 0.7rem;
  border-bottom: 1px solid #d0effb;
`

export const ValuesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.4fr);
  grid-gap: 10px;
`
