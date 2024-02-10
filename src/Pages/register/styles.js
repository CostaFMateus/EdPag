import styled from "styled-components";

export const MasterBox = styled.div`
  display: flex;
  justify-content: start;
  margin: 150px 90px;
  border-radius: 30px;
`

export const BoxLeft = styled.section`
  display: flex;
  height: 40rem;
  width: 60rem;

  & > img {
  height: 30rem;
  width: 30rem;
  margin: 3rem 20px 10px 0;
  }
`

export const BoxRigth = styled.section`
  height: 40rem;
  width: 40rem;
  background-color: white;
  border-radius: 30px;

  & > h1 {
  color: rgb(145, 2, 2);
  background-color: white;
  margin: 30px 100px 0 40px;
  }

`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  opacity: 0.9;
  padding-top: 27rem;
  margin: 1rem 5rem 0 5rem;
  border-radius: 30px;
  box-shadow: 0 0 10px 2px #fafafa;

  & > h2 {
  background-color: transparent;
  display: block;
  font-size: 23px;
  margin-block-start: -19.17em;
  margin-inline-start: 8rem;
  font-weight: bold;
  }

  & > h2 > span {
  color:rgb(145, 2, 2);
  }

  & > input {
  font-size: 24;
  outline: none;
  border: none;
  background: linear-gradient(#000, #191919) center  45px /calc(100% - 20px) 1px no-repeat;
  background-color: white;
  height: 50px;
  display: block;
  margin: 10px;
  }

  & > button {
  border: none;
  margin: 1rem 7rem 0 7rem;
  border-radius: 15px;
  display: block;
  background-color: rgb(145, 2, 2);
  height: 50px;
  width: 15rem;
  color: white;
  font-size: 20px;
  cursor: pointer;
  }
  
  & > button:active {
  scale: 0.9;
  transition: 0.3s;  
  box-shadow: 3px 3px #191919;
  }
  
`
export const LoginMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6rem;
  width: 100%;

  & > img {
  height: 40px;
  width: 40px;
  cursor: pointer;
  }
`