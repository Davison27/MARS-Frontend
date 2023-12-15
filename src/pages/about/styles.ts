import styled from 'styled-components'

export const HospitalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const HospitalImage = styled.img`
  width: 50%;
`

export const Slogan = styled.h2`
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
`

export const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`
