import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import SignInInfo from './components/Email';




export default function SignInSheet() {
  return ( 
    <Card sx ={{ width: 300, height: 300 }}>
      <div>
        <Typography level="title-lg">Welcome to BoardX!</Typography>
        <Email />
        
      </div>
    
  
  </Card>
          );
          }
    


