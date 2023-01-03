import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';
import styles from '../styles.module.css';


export default function EventCard() {
  return (
    <div className='card' style={{

      maxHeight: '640px',
      maxWwidth: '670px',
      margin: '10px'
    }}>
      <Card
        classes={{ root: 'cardBorder' }}>
        <CardActionArea sx={{ fontFamily: 'Inter' }}>

          <CardContent >
            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
              alt="Paella dish"
            />
            <p
              style={{
                padding: '5px 0 0',
                margin: 0,
                fontSize: '20px',
                lineHeight: '26px',
                color: 'var(--main-text-color)'
              }}
            >
              Title of EVENT
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}><Button
              className={`${styles.buttonInTheCard}`}
              sx={{
                textTransform: 'none',
                color: 'var(--main-text-color)',
                fontSize: '14px'
              }}
            >Бесплатно</Button></div>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: '16px',
                lineHeight: '20px',
                color: 'var(--secondary-text-color)'
              }}
            >
              <span style={{ textTransform: 'uppercase' }}>CITY of Event </span>
              <br />
              <span fontSize='14'>place of EVENT</span>
            </p>
            <p
              style={{
                padding: '20px 0',
                margin: 0,
                fontSize: '16px',
                lineHeight: '19px',
                color: 'var(--main-text-color)'
              }}
            >
              Date of event
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: '14px',
                lineHeight: '130%',
                color: 'var(--main-text-color)'
              }}
            >
              Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным... Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным...
            </p>
            <p
              style={{
                paddingTop: '20px',
                margin: 0,
                fontSize: '14px',
                lineHeight: '17px',
                textDecoration: 'underline',
                color: 'var(--secondary-text-color)'
              }}
            >
              Organizator of event
            </p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div >
  );
}