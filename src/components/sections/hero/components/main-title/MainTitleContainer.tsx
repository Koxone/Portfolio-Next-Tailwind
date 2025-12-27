import MatrixText from './components/MatrixText';
import Subtitle from './components/Subtitle';
import Title from './components/Title';

export default function MainTitleContainer() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <Title />
      <MatrixText />
      <Subtitle />
    </div>
  );
}
