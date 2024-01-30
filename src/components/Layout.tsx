import styled from "styled-components";
import Header from "./Header";
import LoadingSpinner from "./LoadingSpinner";

const LayoutWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  padding: 0 16px;
`;

Layout.ContentWrapper = ContentWrapper;
