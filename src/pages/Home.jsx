import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Loader from '../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const url = 'https://fakestoreapi.com/products';

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full mt-48">
          <p className="text-3xl font-semibold text-gray-600">Data Not Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
