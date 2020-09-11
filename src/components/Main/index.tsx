import * as S from './styles'
import Input from "../Input"
import Button from "../Button"
import Card from "../Card"

import { useState, useRef} from "react"
import axios from "axios"
import { store } from 'react-notifications-component'
import Loader from 'react-loader-spinner'

const Main = () =>{

  const [user, setUser] = useState<string | null>(null)
  const [url, setUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  const handleButtonClick = (e: any)=>{  
    
    e.preventDefault()
    let message
    if (!url) {
      message = 'Please type the url of the Live Transmission'
      store.addNotification({
        type: "info",
        container: "top-right",
        message: message,
        dismiss: {
          duration: 4000
        }
      });

      setError(message)
      return
    }
 
    if (/^(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+$/.test(url)===false) {
      message = 'URL format is invalid'
     
      store.addNotification({
        type: "warning",
        container: "top-right",
        message: message,
        dismiss: {
          duration: 4000
        }
      });
      setError(message)
      setUrl('')
      return
    } 

    setUser(null)
    setLoading(true)
   
      axios.post('/request', {
        url
     // axios.post('/bash', {
     //   command: url
      }).then(response =>{
        
        
        console.log('response', response)

        if (response.data.result){
          setUser(response.data.result)
          setError(null)
          //setUrl('')
        } else {

          message = 'It seems this Live is not happening anymore or the Live chat is disabled'
          store.addNotification({
            type: "warning",
            container: "top-right",
            message: message,
            dismiss: {
              duration: 6000
            }
          });

        }

      })
      .catch(err=>{
        console.log('Error on trying to pick user', err.toString());
        store.addNotification({
          type: "danger",
          container: "top-right",
          message: err.toString(),
          dismiss: {
            duration: 4000
          }
        });
        setError(err)
      })
      .finally(()=>{
        setLoading(false)
        //inputRef.current?.focus()
      })
    } 
   
  

  return (
    <S.Wrapper>
     
  
       <S.Title>Random drawing of Youtube Live Participants</S.Title>

       <S.Description>
         The easiest way to pick a random user that is chatting during your YouTube Live Transmission
        
       </S.Description>
      
     
      <Input value={url}
       onChange={handleInputChange}
       name="url" 
       placeholder="https://www.youtube.com/watch?v=XXXXXXXX" 
       helper="Copy your Youtube Live Url from the Address Bar and Paste It Here (Format https://www.youtube.com/watch?v=XXXXXXXX )"  
       />    

      <S.Instrution>ATTENTION: Warn your participants! To be eligible, the user MUST be chatting. Only be watching the live is not enough.</S.Instrution>

      <Button disabled={loading} onClick={handleButtonClick}>{!loading ? "Pick a User" : "Processing"}</Button>
     
      {user && <Card description="And The Winner is...">{user}</Card>}

      {loading &&  <Loader
	     type="ThreeDots"
	     color="#FE4F60"
	     height={100}
	     width={100}

	  />}
     
  
    </S.Wrapper>
  )

} 

export default Main
