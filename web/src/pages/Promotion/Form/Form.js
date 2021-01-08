import { useParams } from 'react-router-dom';

const PagesPromotionForm = () => {
  const { id } = useParams();
  return <div>form {id && <div>{id}</div>} </div>;
};

export default PagesPromotionForm;
