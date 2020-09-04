import * as S from './styles'
import Input from "../Input"
import Button from "../Button"
import Card from "../Card"
import { useState, useRef} from "react"

import axios from "axios"


const Main = () =>{

  const [user, setUser] = useState(null)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  //const inputRef = useRef()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  const handleButtonClick = ()=>{

    if (!url) return

    setUser(null)
    setLoading(true)
   
      axios.post('/request', {
        url
      }).then(response =>{
        setUser(response.data.result)
        console.log('response', response.data)

      })
      .catch(err=>{
        console.log('Error on trying to pick user', err);
      })
      .finally(()=>{
        setLoading(false)
        setUrl('')
        //inputRef.current?.focus()
      })
    } 
   
  

  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de uma caixa de presentes vermelha com um laço azul claro."
      />
       <S.Title>Welcome to Lucky In Live!</S.Title>

       <S.Description>
         Easily pick a random user that is chatting during your YouTube Live Transmission
         <br />

         <p><b>ATTENTION:</b> To be eligible, the user must be chatting. Only participate on the live is not enought.</p>

       </S.Description>
      
      
      <Input value={url}
       onChange={handleInputChange}
       //ref={inputRef} 
       name="url" 
       placeholder="https://www.youtube.com/watch?v=XXXXXXXX" 
       helper="Copy your Youtube Live Url from the Address Bar and Paste It Here (Format https://www.youtube.com/watch?v=XXXXXXXX )"  />    

      <Button onClick={handleButtonClick}>Pick a User</Button>

      {user && <Card description="And The Winner is...">{user}</Card>}
  
    </S.Wrapper>
  )

} 

export default Main
