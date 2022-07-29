import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

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
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={icon} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      );
}

export default MediaCard;