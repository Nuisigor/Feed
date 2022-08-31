import Header from "../../Components/Header/Header";
import PostList from "../../Components/Posts/PostsList";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";
import { post } from "../../data/@types/Post";
import "./Home.css";

export default function Home() {
  const post1: post[] = [
    {
      id: 1,
      autor: "Hello",
      date: "15/08/25",
      data: "Lorempospoaopsaposaopsapoopasposaooasposaopsaopspoaposaposaopsaopsaopsoaopaspoaspoaspoaspoaspopoaspoaspoaspoasaosops",
      image: [
        "http://www.nasa.gov/sites/default/files/p1502aw-no-text.jpg",
        "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        "https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA=",
        "https://www.freecodecamp.org/portuguese/news/content/images/2022/03/Untitled-design--1-.png",
      ],
    },
    {
      id: 2,
      autor: "World",
      date: "15/08/25",
      data: "Lorempospoaopsaposaopsapoopasposaooasposaopsaopspoaposaposaopsaopsaopsoaopaspoaspoaspoaspoaspopoaspoaspoaspoasaosops",
      image: [
        "http://www.nasa.gov/sites/default/files/p1502aw-no-text.jpg",
        "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        "https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA=",
        "https://www.freecodecamp.org/portuguese/news/content/images/2022/03/Untitled-design--1-.png",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="body">
        <ProfileMenu />
        <PostList posts={post1} />
      </div>
    </>
  );
}
