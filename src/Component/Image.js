import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpy2PaCQ8iDOSMyV-MxezIfKw7BuYkkaCUQ1wyjX6t0xioH74EljJVmBrhqatAEhfXcNY&usqp=CAU',
    title: 'Cat',
  },
  {
    img: 'https://www.rover.com/blog/wp-content/uploads/white-cat-min.jpg',
    title: 'cat',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9B8kjHUX01ZL1JPUE2HrCHDt5emxotqHK0A&usqp=CAU',
    title: 'Cat',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZGaRbr-eg7-VW9KhUvRAtU62HkgrdG5zWvx0eKST8Wp1DU54edxK8uUXxk-gSO4u8V8&usqp=CAU',
    title: 'twin cat',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WQbd5YwXUvJQ_0XAOMPjddH8ZKtCFBRF4g&usqp=CAU',
    title: 'twin cat',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslUBoj9qIU-0yF4_9TBlG6YoP_cN-DOZsMEZgnwyTDyVaV0GJlHGBtOzbOepy3TFkFvY&usqp=CAU',
    title: 'twin cat',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhxHWZturR7M25ImO-PkRUw6mWvF8XlQLdr61YuJWbNYWtWEaLwdeMBTZGXhwHphSIE8&usqp=CAU',
    title: 'Thrice cat',
  },
  {
    img: 'https://www.hepper.com/wp-content/uploads/2022/05/khao-manee-kittens_Loopneo_Shutterstock.jpg',
    title: 'Thrice cat',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81pJXqbDiN5-bxLowjljnLOmMsRnxEO9xhw&usqp=CAU',
    title: 'Thrice cat',
  },
];