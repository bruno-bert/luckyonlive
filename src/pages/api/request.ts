import { NextApiRequest, NextApiResponse } from 'next'
import {getRandomInt} from "../../utils"
type Data = {
  result: string | string[]
}

export default  (req: NextApiRequest, res: NextApiResponse<Data>) => {
  

  if (req.method !== "POST"){
    res.status(400).json( { result: "method not supported"})
  }

   if (!req.body.url){
    res.status(400).json( { result: "url required"});
  }

  let {url} = req.body;
  url = url.replace(/watch/,'live_chat');
  console.log(url)
 
  try{

    const puppeteer = require('puppeteer')
    
    
    const run = async()=>{
      let result: any
      
      const selector = 'span[id=author-name]'
      //({headless:  false}
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(url, { waitUntil: 'networkidle0' })
 
       result = await page.$$eval(selector, (elemts: any) => { 
        return elemts.map( 
          (elem: any) => 
          { 
            if (elem.innerText )
              return elem.innerText 
          }
        ) 
      })  
      browser.close()

      const filtered = result.filter( (item: any, index: number) => { return (item!=null && result.indexOf(item)===index ) })
      const index = getRandomInt(0,filtered.length)
      return filtered[index]
     
    }  

     run().then(result=>{     
      res.status(200).json({result})
     }).catch((err: any)=>{
       
      res.status(400).send({result: err});
     }); 


  }catch(error){
    
    res.status(400).send({result: error});
  }
 
 



}