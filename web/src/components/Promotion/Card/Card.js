import './Card.css';

const PromotionCard = ({ promotion }) => {
  return (
    <section className="card">
      <div className="image-card">
        <img src={promotion.imageUrl} alt={promotion.title} />
      </div>

      <div className="info-card">
        <h1>{promotion.title}</h1>
        <span className="card-price">R$ {promotion.price}</span>
        {promotion.comments.length > 0 && (
          <div className="comment-card">
            <span className="comment-title">
              "{promotion.comments[0].comment}"
            </span>
          </div>
        )}

        <div className="links">
          <div className="total-comments">
            {promotion.comments.length} comentários
          </div>
          <div className="cta-link">
            <a href={promotion.url} target="_blank" rel="noreferrer">
              IR PARA O SITE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionCard;
