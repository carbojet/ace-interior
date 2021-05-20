import { Heading, Page } from "@shopify/polaris";
import React,{ Component } from 'react';
import { getSessionToken } from "@shopify/app-bridge-utils";
export default class Index extends Component{

  constructor(props) {
      super(props)  
      this.state = {
         theme:null,
      }
  }
  componentDidMount(){
      try{    
        return getSessionToken(Window.app)
        .then((token) => {
          console.log(token)
        })
          
          // this.authAxios.get('/api/theme').then(result=>{
          //   console.log(result)
          // }).catch(error => {console.log(error)})
      }catch(error){
          console.log(error)
      }
  }
  render(){
    return(
      <Page>
        <Heading>Axios Heroku Shopify app with Node and React 🎉</Heading>
      </Page>
    )
  }  
}
