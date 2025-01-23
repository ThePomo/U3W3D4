import { Link } from 'react-router-dom';
import { Article } from '../types/Article';
import { Card, Col } from 'react-bootstrap';

interface SingleArticleProps {
  article: Article;
}

const ArticleItem = (article: SingleArticleProps) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ height: '100%' }}>
        <Card.Img
          variant='top'
          src={article.article.image_url}
          alt={article.article.title}
        />
        <Card.Body>
          <Card.Title>{article.article.title}</Card.Title>
          <Card.Text>{article.article.published_at}</Card.Text>
          <Link to={`/article/${article.article.id}`}>Leggi di più</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleItem;
