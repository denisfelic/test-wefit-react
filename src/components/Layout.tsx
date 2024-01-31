import styled from "styled-components";
import Header from "./Header";
import LoadingSpinner from "./LoadingSpinner";
import theme from "../styles/theme";

const LayoutWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
`;

export default function Layout({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
}) {
  return (
    <LayoutWrapper>
      <Header />
      {isLoading ? <LoadingSpinner /> : <> {children}</>}
    </LayoutWrapper>
  );
}

const ContentWrapper = styled.div`
  flex: 1;
  padding: 0 16px 16px 16px;
  display: flex;
  flex-direction: column;


  @media screen and (${theme.breakpoints.lg}){ 
    padding: 29px 0px;
  }
`;

Layout.ContentWrapper = ContentWrapper;
