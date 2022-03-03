import { useRecoilState } from 'recoil';
import { testHomePageAtom } from './HomePage';

const PageOne = () => {
  const [testValue, setTestValue] = useRecoilState(testHomePageAtom);
  console.log(testValue)
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setTestValue(!testValue);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default PageOne;
