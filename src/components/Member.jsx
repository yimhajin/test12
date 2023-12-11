export default function Member({ memberName, nickName }) {
  return (
    <div className='member'>
      <h1>{memberName}</h1>
      <p>{nickName}</p>
    </div>
  );
}
