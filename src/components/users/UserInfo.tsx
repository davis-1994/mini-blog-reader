type Props = {
  title: string;
  body: string;
};

const UserInfo = ({ title, body }: Props) => {
  return (
    <p>
      <span className='font-bold'>{title}: </span>
      {body}
    </p>
  );
};

export default UserInfo;
