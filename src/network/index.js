import axios from 'axios'

//直接return instance就是返回一个promise
export function inter1 (config) {
  
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    
    //拦截请求
    instance.interceptors.request.use(res => {
     // console.log(res)
      return res  //拦截之后要返回回去
    },err => console.log(err))

    //拦截响应
    instance.interceptors.response.use(res => {
      //console.log(res)
      return res.data
    },err => console.log(err))
  
   return instance(config)
}