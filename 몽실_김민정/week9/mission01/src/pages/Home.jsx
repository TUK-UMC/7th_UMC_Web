import { AlbumCard } from "../components/AlbumCard";
import { Navbar } from "../components/Navbar";
import cartItems from "../mocks/cardItems";
import * as S from "../styles/Home.style";

const Home = () => {
  return (
    <>
      <Navbar />
      <S.HomePageContainer>
        <h1 className='main-text'>당신이 선택한 음악</h1>
        <S.AlbumCardLists>
          {cartItems.map((album) => (
            <AlbumCard key={album.id} data={album} />
          ))}
        </S.AlbumCardLists>
      </S.HomePageContainer>
    </>
  );
};

export default Home;
