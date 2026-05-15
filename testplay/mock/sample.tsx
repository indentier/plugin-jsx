interface Props {
  name: string;
}

function Greeting({ name }: Props): JSX.Element {
  if (!name) {
    return <span>Hello!</span>;
  }
  return <span>Hello, {name}!</span>;
}

export default Greeting;
