// Recoil Import
import { useRecoilValue, atom } from 'recoil';
const HomePages = () => {
  const testRecoil = useRecoilValue(testHomePageAtom);
  console.log(testRecoil)
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export const testHomePageAtom = atom({
  key: 'testHomePageAtom', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default HomePages;
