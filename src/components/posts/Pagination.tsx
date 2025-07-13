'use client';

type Props = {
  maxPage: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ maxPage, page, setPage }: Props) => {
  return (
    <div className='join mb-5'>
      {Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
        <input
          key={i}
          className='join-item btn btn-square'
          type='radio'
          name='options'
          aria-label={String(i)}
          checked={i === page}
          onChange={() => setPage(i)}
        />
      ))}
    </div>
  );
};

export default Pagination;
