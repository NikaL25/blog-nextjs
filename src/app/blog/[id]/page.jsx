"use client"; // Mark the component as a client-side component

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const BlogId = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          cache: 'no-store'
        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // Any cleanup code
    };
  }, [id]);

  console.log('Loading:', loading); // Log the loading state

  if (loading) {
    return <div>Loading...</div>; // Display loading message if loading is true
  }

  console.log('Data:', data); // Log the data once fetched

  if (!data) {
    return <div>No data available.</div>; // Display message if no data available
  }

  return (
    // <div className={styles.container}>
    //   <div className={styles.top}>
    //     <div className={styles.info}>
    //       <h1 className={styles.title}>{data.title}</h1>
    //       <p className={styles.desc}>{data.desc}</p>
    //       <div className={styles.author}>
    //         <Image
    //           src={data.img}
    //           alt={data.title}
    //           width={40}
    //           height={40}
    //           className={styles.avatar}
    //         />
    //         <span className={styles.username}>{data.username}</span>
    //       </div>
    //     </div>
    //     <div className={styles.imageContainer}>
    //       <Image src={data.img} alt={data.title} fill={true} className={styles.image} />
    //     </div>
    //   </div>
    //   <div className={styles.content}>
    //     <p className={styles.text}>{data.content}</p>
    //   </div>
    // </div>
    <div>No data available.</div>
  );
};

// Export the BlogId component
export default BlogId;

