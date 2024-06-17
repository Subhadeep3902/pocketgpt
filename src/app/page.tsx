import { Container, TextField, Typography } from '@mui/material';
import './page.css';
import img from './assets/images/Artificial intelligence-pana.png'
import Image from 'next/image'
import { relative } from 'path';
export default function Home() {
  return (
    <div className="background">
      {/* For Background style 3 vacant span are taken */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Container className='promptcontainer' >

      <Typography variant="h5" component="h2" style={{color:'#9c9791',textAlign:'center'}}>  Start Chatting with</Typography>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> <Typography variant="h4" component="h2" style={{color:'#f37114',textAlign:'center',margin:"10px 10px"}}>ChatGpt</Typography> <Typography variant="h5" component="h2" style={{color:'#9c9791',textAlign:'center'}}> Now!</Typography> 
   </div>
   <div style={{display:'flex',alignItems:'center',justifyItems:'center',flexDirection:"column"}}>
  <Image  alt="aibotimage" className="object-cover" src={img} style={{width:"50%"}} />
  <a style={{textAlign:"center"}} href="https://storyset.com/technology">Technology illustrations by Storyset</a>
   </div>
 
   <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{mt:2,width:"100%",color:"red",
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#f37114',
    },
    '&:hover fieldset': {
      borderColor: '#f37114',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f37114',
    },
  },

   }}/>
 
       </Container>
      
    </div>
  );
}
