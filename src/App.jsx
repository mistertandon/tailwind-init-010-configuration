import tw, { css } from 'twin.macro';

const aspectSquare = css`{ aspect-ratio: 1; }`;

// const AppContainer = tw.div`bg-[#C7C7C7] w-full h-[500px] ${aspectSquare}`;
const AppContainer = tw.div`
  bg-[#C7C7C7]
  w-full
  h-[500px]
`
const App = () => {
  return <AppContainer>Hello</AppContainer>;
};

export default App;
