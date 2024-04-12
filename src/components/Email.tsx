import * as React from 'react'; 
import Input from '@mui/joy/Input';

export default function InfoBar() {
  return <Input color = "neutral" sx = {{ backgroundColor: '#0B0D0E',
    '--Input-focusedHighlight': 'gray'}} placeholder="Email" />;
}

