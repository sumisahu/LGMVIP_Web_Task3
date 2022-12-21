
import { Grid } from "@mui/material"
import Avatar from '@mui/material/Avatar';


export default function ShowRegistered(props)
{
    //  alert(JSON.stringify(props.Picture))
    
    
     return(
        <div style={{width:'100%',display:'flex',flexDirection:'row',border:'1px solid black',marginTop:50,marginLeft:10}}>
            <div style={{width:'50%'}}>
            <Grid container spacing={2}>
           <Grid item xs={12} style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
            Description
            <hr/>
             </Grid>
            <Grid item xs={12} >
                 <i>{props.name}</i>
                 </Grid>
                 <Grid item xs={12}>
                 <i>{props.gender}</i>
            </Grid>
            <Grid item xs={12}>
            <i> {props.email}</i>
                 </Grid>
                 <Grid item xs={12}>
                 <i> {props.website}</i>
                 </Grid>
                 <Grid item xs={12}>
                 <i>{props.skill}</i>
                 </Grid>

    
             
             </Grid>
             
        </div> 
        <div style={{width:'50%'}}>
        <Grid container spacing={2}>
           <Grid item xs={12} style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
              Image
              <hr/>
              </Grid>
             <Grid item xs={12}>
             <img src={props.Picture.url} width='200'  />
                </Grid>
             </Grid>
            </div>
        </div>   

     )
 }