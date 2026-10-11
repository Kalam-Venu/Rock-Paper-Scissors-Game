
import styled from 'styled-components'

export const Bgcontainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px;
  }
`

export const Uppercard = styled.div`
  min-height: 20%;
  width: 70%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 25%;
    padding: 15px;
  }
`

export const Mainheading = styled.h1`
  color: #ffffff;
  width: 150px;
  font-family: 'Bree Serif';
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 15px;
    width: 60px;
  }
`

export const Scorecard = styled.div`
  background-color: #ffffff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  border-radius: 10px;
  height: 100%;

  @media (max-width: 768px) {
    width: 30%;
  }
`

export const Scoreheading = styled.p`
  color: #223a5f;
  text-align: center;
  font-size: 30px;
  margin: 0;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Scorepara = styled.p`
  color: #223a5f;
  text-align: center;
  font-size: 40px;
  margin: 0;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const Gamecarddiv = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Choicebutton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Choiceimage = styled.img`
  height: 150px;
  width: 150px;
  background-color: transparent;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 130px;
    width: 130px;
  }
`

export const Rulesbutton = styled.button`
  border: none;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 20px;
  cursor: pointer;
`

export const Rulesdiv = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 25px;
`

export const Rulesimg = styled.img`
  align-self: center;
  width: 80%;
`

export const Closebtn = styled.button`
  align-self: flex-end;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Gameresultcard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 55%;
  align-self: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Eachchoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Heading = styled.p`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Eachimage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 120px;
    width: 120px;
  }
`

export const Resultcard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: center;
`

export const Playagnbtn = styled.button`
  border: none;
  background-color: #ffffff;
  padding: 10px 50px;
  border-radius: 5px;
  cursor: pointer;
`

export const Gameresulttotalcard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
