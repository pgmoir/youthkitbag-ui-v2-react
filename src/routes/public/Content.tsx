import { JSX } from 'react';
import { useParams } from 'react-router-dom';

export default function Content(): JSX.Element {
  const { content } = useParams();

  return <div>Content page for {content}</div>;
}
