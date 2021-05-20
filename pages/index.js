import { Heading, Page } from "@shopify/polaris";
import React,{ Component } from 'react';
import axios from 'axios';
export default class Index extends Component{

  constructor(props) {
      super(props)  
      this.state = {
         theme:null,
      }
  }
  componentDidMount(){
      try{          
          this.authAxios.get('/api/theme').then(result=>{
            console.log(result)
          }).catch(error => {console.log(error)})
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
