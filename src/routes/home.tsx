import PostTweetForm from "../components/post-tweet-form";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
    </Wrapper>
  );
}
