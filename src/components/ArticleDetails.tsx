import { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Article } from '../types/Article';

const ArticleDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [article, setArticle] = useState<null | Article>(null);

  const singleArticle = async () => {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/${id}`
    );
    if (!response.ok) {
      throw new Error('Errore nel caricamento dei dati');
    }
    const data = await response.json();
    console.log(data);
    setArticle(data);
  };

  useEffect(() => {
    singleArticle();
  }, []);

  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant='top' src={article?.image_url} alt={article?.title} />
        <Card.Body>
          <Card.Title>{article?.title}</Card.Title>
          <Card.Text>{article?.published_at}</Card.Text>
          <Link to='/'>Torna indietro</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleDetails;
