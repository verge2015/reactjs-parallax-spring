// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Grid } from '@mui/material';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
// import { motion } from "framer-motion";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const MediaCard = (props) => {

    const { title, description, icon } = props;

    return (


        <Paper
        sx={{
          p: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2%',
          maxWidth: '50%',
          flexGrow: 1,
          opacity: 0.9,
        //   backgroundColor: 'transparent'
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={3}  >
    
          <Grid item xs={12} sm container  >
            <Grid item xs container direction="column" spacing={2} >
              <Grid item xs >
                <Typography gutterBottom variant="subtitle1" component="div" color='#4D9AE4'>
                    {title}
                </Typography>
                <Typography variant="body1" gutterBottom  color='#1C205F' align='justify'>
                    {description}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography> */}
              </Grid>
              {/* <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid> */}
          </Grid>

          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={icon} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>

        // <Grid container spacing={3} style={{ marginLeft: '1%', marginRight: '1%' }} >
        // <Grid item xs={12}>

        // <Card sx={{ maxWidth: '80%', backgroundColor: 'transparent', color: '#ffffff' }}>
        //   <CardMedia
        //     component="img"
        //     height="140"
        //     // image="/static/images/cards/contemplative-reptile.jpg"
        //     // alt="green iguana"
        //   />
        //   <CardContent>
        //     <Typography gutterBottom variant="h5" component="div"  color='#4D9AE4'>
        //     {title}
        //     </Typography>
        //     <Typography variant="body3" color='#1C205F'>
        //       {description}
        //     </Typography>
        //   </CardContent>
        //   {/* <CardActions>
        //     <Button size="small">Share</Button>
        //     <Button size="small">Learn More</Button>
        //   </CardActions> */}
        // </Card>
        // </Grid>
        // </Grid>
      );
}

export default MediaCard;