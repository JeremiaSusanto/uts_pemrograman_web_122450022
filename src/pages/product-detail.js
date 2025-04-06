import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchDetail();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-cover mt-4" />
      <p className="mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
