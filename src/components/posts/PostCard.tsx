import Link from 'next/link';

import truncate from '@/helper/truncate';

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostCard = ({ post }: { post: Post }) => {
  const { id, title, body } = post;

  const truncatedBody = truncate(body, 40);

  return (
    <div
      className='card w-full bg-base-200 card-sm md:card-md shadow-sm'
      key={post.id}
    >
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{truncatedBody}</p>
        <div className='justify-end card-actions'>
          <Link href={`/posts/${id}`}>
            <button className='btn btn-primary'>Read</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
