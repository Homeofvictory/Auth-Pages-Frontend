import React,{Component} from 'react'



  export default class landpage extends Component {
    componentDidMount(){
      fetch("http://localhost:8000/landpage",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
          token:window.localStorage.getItem("token")
          }),
        }).then((res)=>res.json())
        .then((data)=>{
          console.log(data, "UserData");
        });
    }
    
 
    render(){

   return (
     <div>
        <h2>hello tobi</h2>
        <p>hello, how far CEO African Wealth</p>
</div>


);
   }
}

