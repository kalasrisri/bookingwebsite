import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Home from './Home';
import SearchAppBar from './Appbar';
import '../css/background.css';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function booking() {
  return (
    <div>
    <div>
      <SearchAppBar/>
      <Home/>

    </div>
    <ImageList
      sx={{ width: 1350, height: 1050 }}
      variant="quilted"
      cols={4}
      rowHeight={180}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>

          <img
            {...srcset(item.img, 159, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
           <Link to="/pay">
           <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            />
            </Link>
        </ImageListItem>
      ))}
    </ImageList></div>
  );
}

const itemData = [
  {
    img: 'https://cdn1.goibibo.com/voy_ing/t_g/6a0e4eec1e2511e9a6f10242ac110003.jpeg',
    title: 'Indee Home',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWJMHO_2UFJhghGFUo9CvUKBg1ODYmVfjPA&usqp=CAU/jpg ',
    title: 'Superior Room 2 Sgl Beds',
    author: 'RS.2995',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRef5Xb-HIUFyv59rIMPzG1uscek9kVUyCAmw&usqp=CAU.jpg',
    title: 'Superior Room 1 Dbl Bed',
    author: 'RS.2995',
  },
  {
    img: 'https://r1imghtlak.ibcdn.com/d3c9c154073311eda4480a58a9feac02.jpeg?&downsize=520:350&crop=520:350;0,20&output-format=jpg',
    title: 'Deluxe Room 1 Dbl Bed',
    author: 'RS.3642',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBNwvIleoZYcNbpB-PtGDNE7i_n8hJSO04w&usqp=CAU.jpg',
    title: 'The Muse Sarovar Portico',
    cols: 2,
  },
  {
    img: 'https://cdn1.goibibo.com/voy_ing/t_g/ef0dd136d13411e4b6365ee5da2daa2a.jfif',
    title: 'Superior Room 2 Sgl Beds',
    author: 'RS.3655',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aRLYIYPgtDR1-CwKMUaV1EM0Xa0eKcDiqQ&usqp=CAU.jpg',
    title: 'Superior Room 1 Dbl Bed',
    author: 'RS.3655',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6Zykt8OncjbOE9Ctzogly5NWyyjn8E_cFw&usqp=CAU.jpg',
    title: 'Deluxe Room 1 Dbl Bed',
    author:'RS.6555',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQQ0wyWQxU8CUwVbKdM9Mwkw0I_8qjgUHAQ&usqp=CAU.jpg',
    title: 'Hotel Kendall Square',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBb18afLLHX4qF72TrR4xRu3p7p-kvauWRw&usqp=CAU.jpg',
    title: 'Superior Room 1 Dbl Bed',
    author:'RS.3333',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_jzIfZ3lZtHSxfx9Gyz5ntsP3NzuPYY3kKeJzH-9gjWkkZxIOOlHSptxHgOHIKcLTyY&usqp=CAU.jpg',
    title: 'Superior Room 2 Sgl Beds',
    author:'RS.6333',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0m4Vvd4m6LzO4pyMfqCpHpSlOl8-qLx9xxg&usqp=CAU.jpg',
    title: 'Deluxe Room 1 Dbl Bed',
    author:'RS.6333',
    cols: 2,
  },
];