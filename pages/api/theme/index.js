import axios from 'axios';
import Cookies from 'js-cookie';

export default async (req,res) => {
    const shop = Cookies.get('shopOrigin')
    const accessToken = Cookies.get('accessToken')
    const themeApi = "admin/api/2021-01";
    const {method,headers,query} = req;
    switch(method){
        case 'GET':
            try{
                const response = await axios({
                  headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Access-Token": accessToken,
                  },
                  url: "/themes.json",
                  method: "GET",
                  baseURL:`https://${shop}/${themeApi}`,
                  params: {
                    url: query.url,
                    ecom: query.ecom,
                    product_id: 0,
                    db_entry: 0,
                  },
                }).then( async (response) => {
                    res.status(200).json({success:true,themes:response})
                })
                
            }catch(error){
                res.status(400).json({success:false,themes:error})
            }
            break;
        case 'POST':
            try{
                //const product = await Product.create(req.body)
                const response = await db.collection(headers.shopname).insertOne(req.body)
                res.status(201).json({success:true,data:response})
            }catch(error){
                res.status(400).json({success:false,error:error})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}