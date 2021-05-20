import { Heading, Page } from "@shopify/polaris";
import React,{ Component } from 'react';
import axios from 'axios';

export default class Index extends Component{

  constructor(props) {
      super(props)  
      this.state = {
         theme:null
      }
  }
  componentDidMount(){
      try{
          const response = axios({
              url:'/api/theme',
              method:'GET',         

          }).then((response) =>{
              
            this.setState({
                theme:response
            })
          })
      }catch(error){
          console.log(error)
      }
  }
  render(){
    console.log(this.state.theme)
    return(
      <Page>
        <Heading>Axios Heroku Shopify app with Node and React 🎉</Heading>
      </Page>
    )
  }  
}
