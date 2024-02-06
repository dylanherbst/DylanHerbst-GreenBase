import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { green, blue } from '@mui/material/colors';
import { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: '$12/month',
    price: 12,
    plan: 'Basic Plan',
    subheader: 'Start your bussiness',
    description: [
      'Free Domain',
      'Google Ads Credit',
      'Up to 5 Users',
     'Free SSL Security',
     'Up to 100 Products',
    'Chat Inbox',
    'Unlimited Storage',
     'No Transaction Fee'
    ],
  },
  {
    title: 'Pro',
    price: 20,
    plan: 'Professional',
    subheader: 'Start your bussiness',
    description: [
      'Free Domain',
      'Google Ads Credit',
      'Up to 5 Users',
      'Free SSL Security',
      'Up to 100 Products',
      'Chat Inbox',
      'Unlimited Storage',
      'No Transaction Fee'
    ],

  },
  {
    title: 'Enterprise',
    price: 30,
    plan: 'Bussiness',
    subheader: 'Start your bussiness',
    description: [
      'Free Domain',
      'Google Ads Credit',
      'Up to 5 Users',
      'Free SSL Security',
      'Up to 100 Products',
      'Chat Inbox',
      'Unlimited Storage',
      'No Transaction Fee'
    ],
  },
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function PricingPage() {

  const [billingCycle, setBillingCycle] = useState('monthly'); // default to monthly

  const handleBillingChange = (cycle) => {
    setBillingCycle(cycle === 'monthly' ? 'annually' : 'monthly');
  };


  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Box sx={{ padding: 4, textAlign: 'left' }}>
  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
    Choose a Plan
  </Typography>
</Box>
  
 <Box
    sx={{
      height: '100%', 
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: 10,
      margin: 0,
      boxSizing: 'border-box', 
      width: '120%',
      bgcolor: 'white'

  }}>
     
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10, pb: 8,   width: '100%',
  boxSizing: 'border-box'  }}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing Plans
        </Typography>
        <Typography variant="h7" align="center" color="text.secondary" component="p">
        Familiarize yourself with the payment plans below. <br></br>
        Pick best pracing plan to fit your needs.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant={billingCycle === 'monthly' ? 'contained' : 'outlined'}
            onClick={() => handleBillingChange('annually')}
            sx={{
              borderColor: billingCycle === 'monthly' ?'default' : blue[500],
              color: billingCycle === 'monthly' ? 'white' : 'default',
              mr: 1,
            }}
          >
            Bill Monthly
          </Button>
          <Button
            variant={billingCycle === 'annually' ? 'contained' : 'outlined'}
            onClick={() => handleBillingChange('monthly')}
            sx={{
              borderColor: billingCycle === 'annually' ? 'default' : blue[500],
              color: billingCycle === 'annually' ? 'white' : 'default',
            }}
          >
            Bill Annually
          </Button>
        </Box>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="md" component="main">
  <Grid container spacing={5} alignItems="flex-end">
    {tiers.map((tier) => (
      <Grid
        item
        key={tier.title}
        xs={12}
        sm={tier.title === 'Enterprise' ? 12 : 6}
        md={4}
      >
     <Card sx={{ minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pt: 2, pb: 2 }}>
    {/* Adjusted padding for top and bottom */}
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                ${tier.price}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', ml: 1 }}>
                /month
              </Typography>
              </Box>
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
      {tier.plan} {/* Plan */}
    </Typography>
    <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
      {tier.subheader} {/* Subheader */}
    </Typography>

    {/* Description List */}
    <br></br>
    <ul>
      {tier.description.map((line, index) => (
        <Typography component="li" variant="subtitle1" align="left" key={index}>
            <TaskAltIcon style={{ color: green[500], marginRight: 8 }} />
          {line}
        </Typography>
      ))}
    </ul>
  </CardContent>


          <CardActions sx={{ justifyContent: 'center' }}>
            <Button fullWidth variant="outlined"  
            sx={{ backgroundColor: 'white', color: 'blue', 
    '&:hover': {  backgroundColor: blue[500],  color: 'white',  }, }} >
              Select Plan
            </Button>
          </CardActions>

        </Card>
      </Grid>
    ))}
  </Grid>
</Container>
<Typography marginTop={'40px'}>
  Cancel or Upgrade plan anytime
</Typography>

      </Box>
    </ThemeProvider>
  );
}