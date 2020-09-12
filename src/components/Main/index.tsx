import * as S from './styles'
import Input from "../Input"
import Button from "../Button"
import Card from "../Card"

import { useState } from "react"
import axios from "axios"
import { store } from 'react-notifications-component'
import Loader from 'react-loader-spinner'
import { HomeLanguageType } from 'locales/types'

export type MainProps = {
  lang: HomeLanguageType
}


const Main = ({lang} : MainProps) =>{
  
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
      message = lang.urlRequired
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
      message = lang.urlInvalid
     
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
      }).then(response =>{
        
        
        console.log('response', response)

        if (response.data.result){
          setUser(response.data.result)
          setError(null)         
        } else {

          message = lang.chatDisabled
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
      })
    } 
   
  

  return (
    <S.Wrapper>
     
  
<S.Title>{lang.headline}</S.Title>



       <S.Description>
        {lang.subHeadline}
       </S.Description>
      
     
      <Input value={url}
       onChange={handleInputChange}
       name="url" 
       placeholder="https://www.youtube.com/watch?v=XXXXXXXX" 
       helper={lang.helper}  
       />    

  <S.Instrution>{lang.instruction}</S.Instrution>

      <Button disabled={loading} onClick={handleButtonClick}>{!loading ? lang.buttonNormal : lang.buttonLoading}</Button>
     
      {user && <Card description={lang.resultHeader}>{user}</Card>}

      {loading &&  <Loader
	     type="ThreeDots"
	     color="#FE4F60"
	     height={100}
	     width={100}

	  />}
     
  
    </S.Wrapper>
  )

} 

Main.defaultProps = {
  lang: {}
}


export default Main
