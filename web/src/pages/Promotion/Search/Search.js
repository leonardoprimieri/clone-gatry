import axios from 'axios';
import { useEffect, useState } from 'react';
import PromotionCard from '../../../components/Promotion/Card/Card';

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    async function getPromotions() {
      const response = await axios.get(
        'http://localhost:3333/promotions?_embed=comments'
      );
      setPromotions(response.data);
    }

    getPromotions();
  }, []);

  return (
    <div className="app">
      <PromotionCard promotions={promotions} />
    </div>
  );
};

export default PagesPromotionSearch;
