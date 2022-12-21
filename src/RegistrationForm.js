import { Grid,Button,TextField } from "@mui/material";
import RegistrationFormCss from "./RegistrationFormCss";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
 import Checkbox from '@mui/material/Checkbox';
 import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
 import ShowRegistered from "./ShowRegistered";
 import AppBar from '@mui/material/AppBar';
 import Toolbar from '@mui/material/Toolbar';





export default function RegistrationForm()
{
    const classes=RegistrationFormCss()

    const [picture,setPicture]=useState({bytes:'',url:'/sumi.jpg'})
    const [status,setStatus]=useState(0)
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Website,setWebsite]=useState('')
    const [Gender,setGender]=useState('')
    const [Skills,setSkills]=useState([])

   
  
const handleImage=(event)=>{
    setPicture({bytes:event.target.files[0],url:URL.createObjectURL(event.target.files[0])})
  }

  const handleStatus=()=>{
    setStatus(1)
    }




    return(
        <div style={{width:'100%'}}>
                 <AppBar position="static" color='primary' style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:22,letterSpacing:1,fontFamily:'sans-serif',color:'blue',background:'#bdc3c7',fontWeight:'bold'}} >
      <Toolbar variant="dense">
           Student Enrollment Form
         </Toolbar>
        </AppBar>
        <div className={classes.main}>
         
    
       
            <div className={classes.root}>
            <Grid container spacing={2}>
           
      <Grid item xs={12} style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
          Registration Form
        </Grid>
        <Grid item xs={12}>
            <TextField fullWidth label="Name" onChange={(event)=>setName(event.target.value)}  />
        </Grid>
        
        <Grid item xs={12}>
            <TextField fullWidth label="Email"  onChange={(event)=>setEmail(event.target.value)} />
        </Grid>
        <Grid item xs={12}>
            <TextField fullWidth label="Website" onChange={(event)=>setWebsite(event.target.value)} />
        </Grid>
        <Grid item xs={6}>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" onChange={handleImage} />
        <PhotoCamera />
      </IconButton>
      upload image
         </Grid>
         <Grid item xs={6}>
         <Avatar
        alt="Remy Sharp"
        src={picture.url}
        sx={{ width: 56, height: 56 }}
      />
         </Grid>
         
        <Grid item xs={6} style={{marginTop:20,fontWeight:'bold'}}>
          Gender
        </Grid>
        <Grid item xs={6}>
        <FormControl>
       <RadioGroup>
    <FormControlLabel value="female" onChange={(event)=>setGender(event.target.value)} control={<Radio />}  label="Female" />
    <FormControlLabel value="male"  onChange={(event)=>setGender(event.target.value)}  control={<Radio />} label="Male" />
    <FormControlLabel value="other"  onChange={(event)=>setGender(event.target.value)}  control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={4} style={{fontWeight:'bold',marginTop:10}}>
          Skills
        </Grid>
        <Grid item xs={8}>
        <Checkbox onChange={(event)=>setSkills(event.target.value)} value='JAVA' />JAVA
      <Checkbox onChange={(event)=>setSkills(event.target.value)} value="HTML" />HTML
      <Checkbox  onChange={(event)=>setSkills(event.target.value)} value="CSS" />CSS
        </Grid>
        <Grid item xs={6} style={{marginTop:20,fontWeight:'bold'}}>
      <Button fullWidth variant="contained" style={{background:'#3498db'}} onClick={handleStatus} >Enroll Student</Button>
        </Grid>
        <Grid item xs={6} style={{marginTop:20,fontWeight:'bold'}}>
        <Button fullWidth variant="contained" style={{background:'red'}} >Clear</Button>

        </Grid>
        </Grid>
        
        

      

</div>

<div className={classes.root1}>
    {status==1?
 <ShowRegistered name={Name} email={Email} website={Website} gender={Gender} skill={Skills} Picture={picture} />
   :<></> }
</div>
        </div>
        </div>
    )
}