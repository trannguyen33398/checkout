import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { cakeType, item, customerType } from './constant/interface';
import { apiDomain, getCalc} from './constant/api';

function App() {
  const [customer, setCustomer] = React.useState('');
  const [customerCode, setCustomerCode] = React.useState(0);
  const [cake, setCake] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [items, setItems] = React.useState<item[]>([]);
  const handleChangeCustomer = (event: SelectChangeEvent) => {
    const customerName = event.target.value
    const getCustomerCode : any =  Object.keys(customerType)
    .filter((key) => key.includes(customerName))
    .reduce((obj, key:any) => {
        return Object.assign(obj, {
          [key]: customerType[key]
        });
  }, {});
    setCustomer(customerName);
    setCustomerCode(getCustomerCode[customerName])
  };
  const handleChangeCake = (event: SelectChangeEvent) => {
    setCake(event.target.value);
  };
  const calc = async () =>{
    const params = {customer: customerCode, items: items}
    const result = await axios.post(`${apiDomain}/${getCalc}`,params)
    alert(`Total fee is: ${result['data']}`)
  }
  const add = () =>{
    const item: item = {
      cakeType: parseInt(cake),
      amount: amount
    }
    items.push(item)
    setItems(items)
  }
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: ' 50px'
    }}>
      <Box sx={{ width: '200px', marginRight:'20px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Please choose customer type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={customer}
            label="customer"
            onChange={handleChangeCustomer}
          >
            <MenuItem value={'DEFAULT'}>Customer</MenuItem>
            <MenuItem value={'FACEBOOK'}>Facebook</MenuItem>
            <MenuItem value={'AMAZON'}>Amazon</MenuItem>
            <MenuItem value={'MICROSOFT'}>Microsoft</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: '200px', marginRight:'20px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Please choose cake</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cake}
            label="cake"
            onChange={handleChangeCake}
          >
            <MenuItem value={cakeType.SMALL_PIZZA}>Small Pizza</MenuItem>
            <MenuItem value={cakeType.MEDIUM_PIZZA}>Medium Pizza</MenuItem>
            <MenuItem value={cakeType.LARGE_PIZZA}>Large Pizza</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ marginRight:'20px' }}
    >
      <TextField id="outlined-basic" label="Please input amount" variant="outlined" onChange={e => setAmount(parseInt(e.currentTarget.value))} style={{}} />
     
    </Box> 
    <Button variant="outlined" sx={{ marginRight:'20px' }}  onClick={() => {
      add();
  }}>Add</Button>
  <Button variant="outlined"  onClick={() => {
      calc();
  }}>Calc</Button>
    </div>
  );
}

export default App;
