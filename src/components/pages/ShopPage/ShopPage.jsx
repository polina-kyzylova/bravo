import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './ShopPage.module.css';
import ShopCardsTmpl from '@templates/ShopCardsTmpl/ShopCardsTmpl';

export default function ShopPage() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(7);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${page}`);
      const data = await response.json();

      setItems(prevItems => [...prevItems, ...data]);
      setPage(prevPage => prevPage + 1);

      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
      setError('Ошибка при загрузке данных');
    }
  };


  return (
    <div className={styles.wrapper}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Загрузка...</h4>}
        endMessage={<p>Больше данных нет</p>}
      >
        {!error ? <ShopCardsTmpl clothes={items} /> : error}
      </InfiniteScroll>
    </div>
  )
}
