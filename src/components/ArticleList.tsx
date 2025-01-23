import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import ArticleItem from './ArticleItem';
import { Container, Row } from 'react-bootstrap';

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles'
      );
      if (!response.ok) {
        throw new Error(
          `Errore nel recupero dei dati. Status: ${response.status}`
        );
      }
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container className='d-flex '>
      <Row>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
